import sqlite3
import pandas as pd
import os

DB_PATH = "src/database/transactions.db"

def create_database():
    os.makedirs("src/database", exist_ok=True)

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            transaction_id TEXT,
            customer_id TEXT,
            kyc_verified INTEGER,
            account_age_days INTEGER,
            transaction_amount REAL,
            channel TEXT,
            timestamp TEXT,
            is_fraud INTEGER,
            hour INTEGER,
            weekday INTEGER,
            month INTEGER,
            is_high_value INTEGER
        )
    """)

    conn.commit()
    conn.close()
    print("Database created & table ready.")


def insert_processed_data(csv_path="data/processed/transactions_processed.csv"):
    df = pd.read_csv(csv_path)

    conn = sqlite3.connect(DB_PATH)
    df.to_sql("transactions", conn, if_exists="append", index=False)

    conn.close()
    print("Processed data inserted successfully.")



    
