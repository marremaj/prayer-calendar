from .database import Base
from sqlalchemy import TIMESTAMP, Column, String, Integer
from sqlalchemy.sql import func
from fastapi_utils.guid_type import GUID, GUID_DEFAULT_SQLITE
from enum import Enum
from sqlalchemy import Enum



class Prayer(Base):
    __tablename__ = 'prayers'
    id = Column(Integer, primary_key=True, autoincrement=True)
    user = Column(String, nullable=False)
    prayer = Column(String, nullable=False)
    date = Column(TIMESTAMP(timezone=True),
                       nullable=False, server_default=func.now())
    updatedAt = Column(TIMESTAMP(timezone=True),
                       default=func.now(), onupdate=func.now())

