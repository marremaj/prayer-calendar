from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel
from enum import Enum

class PrayersEnum(str,Enum):
    Fajar = 'Fajr'
    Duhur = 'Dhuhr'
    Asr = 'Asr'
    Maghreb = 'Maghrib'
    Isha = 'Isha'

class PrayerBaseSchema(BaseModel):
    id: Optional[int] = None
    user: str
    prayer: PrayersEnum
    date: Optional[datetime] = None
    updatedAt: Optional[datetime] = None

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        arbitrary_types_allowed = True


class ListPrayerResponse(BaseModel):
    status: str
    results: int
    prayers: List[PrayerBaseSchema]

