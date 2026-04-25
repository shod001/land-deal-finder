from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from model import calculate_deal_scores

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_PATH = "data/land_data.csv"

@app.get("/")
def root():
    return {"message": "API is running"}

@app.get("/deals")
def get_deals():
    df = pd.read_csv(DATA_PATH)
    df = calculate_deal_scores(df)
    return df.to_dict(orient="records")