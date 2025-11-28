import pandas as pd
import os

RAW_DATA_PATH = "data/raw/raw.csv"
PROCESSED_DATA_PATH = "data/processed/transactions_processed.csv"

def load_raw_data():
    """Load the raw transaction dataset."""
    print("Loading raw dataset...")
    return pd.read_csv(RAW_DATA_PATH)


def clean_data(df):
    """Perform all preprocessing and feature engineering."""
    # -----------------------------
    # Handle Missing Values
    # -----------------------------
    print("\nMissing values before cleaning:")
    print(df.isnull().sum())

    if "kyc_verified" in df.columns:
        df["kyc_verified"].fillna("No", inplace=True)

    df.dropna(subset=["transaction_amount"], inplace=True)

    # -----------------------------
    # Remove Duplicates
    # -----------------------------
    df.drop_duplicates(subset="transaction_id", inplace=True)

    # -----------------------------
    # Standardize Columns
    # -----------------------------
    df["timestamp"] = pd.to_datetime(df["timestamp"], errors="coerce")

    df["channel"] = df["channel"].astype(str).str.title()

    df["transaction_amount"] = df["transaction_amount"].astype(float)

    # -----------------------------
    # Feature Engineering
    # -----------------------------
    df["hour"] = df["timestamp"].dt.hour
    df["weekday"] = df["timestamp"].dt.weekday
    df["month"] = df["timestamp"].dt.month

    df["is_high_value"] = (df["transaction_amount"] > 50000).astype(int)

    return df


def save_processed_data(df):
    """Save cleaned data to processed folder."""
    os.makedirs("data/processed", exist_ok=True)
    df.to_csv(PROCESSED_DATA_PATH, index=False)
    print(f"\nProcessed data saved to: {PROCESSED_DATA_PATH}")


def run_processing():
    """Main function to run entire cleaning pipeline."""
    df = load_raw_data()
    df_clean = clean_data(df)
    save_processed_data(df_clean)
    print("\nData Cleaning Completed Successfully!")

