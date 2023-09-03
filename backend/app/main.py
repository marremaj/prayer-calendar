from . import models, prayer
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(prayer.router, tags=['Prayers'], prefix='/api/prayers')


@app.get("/api/healthchecker")
def root():
    return {"message": "Prayer API is up and running"}

