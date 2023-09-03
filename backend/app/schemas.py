from datetime import datetime
from typing import List
from pydantic import BaseModel
from enum import Enum

class PrayersEnum(str,Enum):
    Fajar = 'Fajr'
    Duhur = 'Duhur'
    Asr = 'Asr'
    Maghreb = 'Maghreb'
    Isha = 'Isha'

class PrayerBaseSchema(BaseModel):
    id: int | None = None
    user: str
    prayer: PrayersEnum
    date: datetime | None = None
    updatedAt: datetime | None = None

    class Config:
        orm_mode = True
        allow_population_by_field_name = True
        arbitrary_types_allowed = True


class ListPrayerResponse(BaseModel):
    status: str
    results: int
    prayers: List[PrayerBaseSchema]

