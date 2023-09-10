from . import schemas, models
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from .database import get_db

router = APIRouter()

# get all records
@router.get('/')
def get_prayers(db: Session = Depends(get_db), search: str = ''):

    prayers = db.query(models.Prayer).filter(
        models.Prayer.prayer.contains(search)).all()
    return {'status': 'success', 'results': len(prayers), 'prayers': prayers}

# create record
@router.post('/', status_code=status.HTTP_201_CREATED)
def create_prayer(payload: schemas.PrayerBaseSchema, db: Session = Depends(get_db)):
    new_prayer = models.Prayer(**payload.dict())
    db.add(new_prayer)
    db.commit()
    db.refresh(new_prayer)
    return {"status": "success", "prayer": new_prayer}

# get single record
@router.get('/{prayerId}')
def get_prayer(prayerId: str, db: Session = Depends(get_db)):
    prayer = db.query(models.Prayer).filter(models.Prayer.id == prayerId).first()
    if not note:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"No prayer with this id: {id} found")
    return {"status": "success", "Prayer": prayer}

#
@router.delete('/{prayerId}')
def delete_prayer(prayerId: str, db: Session = Depends(get_db)):
    prayer_query = db.query(models.Prayer).filter(models.Prayer.id == prayerId)
    prayer = prayer_query.first()
    if not prayer:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f'No prayer with this id: {id} found')
    prayer_query.delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
