from fastapi import FastAPI
from src.api.transactions import router as transaction_router
from src.preprocessing.cleaning_pipeline import pipeline
from src.preprocessing.train_test_split import create_train_test_split
from src.database.db import create_database, insert_processed_data


app = FastAPI(title="Transaction API Backend")

# Register API routes
app.include_router(transaction_router)

@app.get("/")
def home():
    return {"message": "Backend Running"}


@app.on_event("startup")
def run_pipeline_on_start():
    print("Running preprocessing pipeline...")
    pipeline()
    print("Pipeline finished!")
    create_train_test_split()
    create_database()
    insert_processed_data()
