import pandas as pd
from sklearn.model_selection import train_test_split
import os

def run_train_test_split():

    # Load the processed dataset
    df = pd.read_csv("data/processed/transactions_processed.csv")

    # Create processed folder if it doesn't exist
    os.makedirs("data/processed", exist_ok=True)

    # Train-test split (stratified because of fraud imbalance)
    train, test = train_test_split(
        df,
        test_size=0.2,
        stratify=df["is_fraud"],
        random_state=42
    )

    # Save output files
    train.to_csv("data/processed/train.csv", index=False)
    test.to_csv("data/processed/test.csv", index=False)

    print("Train-test split completed!")
    print("Train file saved → data/processed/train.csv")
    print("Test file saved → data/processed/test.csv")


if __name__ == "__main__":
    run_train_test_split()
