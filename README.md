# 🛡️ Predictive_Transaction_Intelligence_using_for_BFSI

A production-grade fraud detection system designed for the Banking, Financial Services, and Insurance (BFSI) domain.
The system detects fraudulent financial transactions in real time using **Machine Learning**, **Rule-Based Intelligence**, and **LLM-powered Explainability**, ensuring accuracy, transparency, and compliance.

---

## 🚀 Features

- 🔍 ML-Based Fraud Prediction
- 📏 Rule-Based Fraud Detection
- 🧠 LLM Explainability (Google Gemini)
- 🚨 Fraud Alert System
- 🗄️ SQLite Database
- 📊 Model Metrics Tracking
- ⚡ FastAPI REST APIs
- 🔐 User Authentication System
- 📈 Risk Trend Analytics
- 🔄 Feedback Loop for Model Improvement
- 🐳 Dockerized & cloud deployed
- 🔐 HTTPS via Nginx reverse proxy

---

## 🧩 Tech Stack

| Layer | Technology |
|------|------------|
Backend API | FastAPI
ML Model | Scikit-learn (RandomForest)
Database | SQLite
LLM | Google Gemini API
Data Processing | Pandas, NumPy
Model Storage | Joblib
Environment Config | python-dotenv
Testing | Postman
Graph | Matplotlib, Seaborn
Frontend | React.js
Reverse Proxy | Nginx
Deployment | Docker, Render
---

## 📂 Project Structure
```bash
predictive-transaction/
|── frontend 
│── main.py
│── .env
│── README.md
│
├── data/
│ ├── raw/
│ └── processed/
│ └── transactions_processed.csv
│
├── src/
│ ├── api/
│ │ └── predict.py
│ │
│ ├── ml/
│ │ ├── train_model.py
│ │ ├── fraud_model.pkl
│ │ ├── scaler.pkl
│ │ └── metrics.json
│ │
│ ├── rules/
│ │ └── rule_engine.py
│ │
│ ├── llm/
│ │ └── gemini_client.py
│ │
│ └── database/
│ ├── db.py
│ └── transactions.db
│
└── requirements.txt
```
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/anwghub/Predictive_Transaction_Intelligence_using_for_BFSI
cd predictive-transaction-backend
```

### 2️⃣ Create Virtual Environment
```bash
python -m venv venv
```

### 3️⃣ Activate Virtual Environment

Windows
```bash
venv\Scripts\activate
```

Linux / macOS
```bash
source venv/bin/activate
```

### 4️⃣ Upgrade pip (Recommended)
```bash
python -m pip install --upgrade pip
```
### 5️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```

### 6️⃣ Create .env File
```bash
echo GOOGLE_API_KEY=your_gemini_api_key_here > .env
```

⚠️ Replace your_gemini_api_key_here with your actual Gemini API key.

🗄️ Database Setup
### 7️⃣ Initialize Database
```bash
python src/database/db.py
```

This creates:

-- transactions table
-- fraud_alerts table
-- feedback table

📊 Data Preprocessing Pipeline
8️⃣ Run Data Cleaning Pipeline
python src/preprocessing/cleaning_pipeline.py

 
9️⃣ 📊 Exploratory Data Analysis (EDA) & Visualizations

After completing data cleaning and preprocessing, **Exploratory Data Analysis (EDA)** was performed to understand transaction patterns and fraud behavior.

As part of the EDA summarization, the following visualizations were generated and stored under the `graphs/` directory.

### 📈 Generated Graphs

| Graph File | Description |
|-----------|-------------|
| `fraud_vs_legit.png` | Shows the overall distribution of Fraud vs Legit transactions |
| `amount_fraud_vs_nonfraud.png` | Compares average transaction amounts for fraud and non-fraud cases |
| `transactions_by_channel.png` | Displays transaction volume across different channels |
| `transactions_by_hour.png` | Highlights transaction frequency by hour of the day |

### 🧠 Purpose of EDA Graphs

- Identify behavioral differences between fraud and legitimate transactions  
- Understand high-risk channels and time windows  
- Support feature engineering for model training  
- Provide insights for rule-based fraud detection (Milestone 3)

📁 **Location:**
```bash
data/eda/graphs/
```

🔟 Train-Test Split
python src/preprocessing/train_test_split.py

Creates:
- train.csv
- test.csv

🤖 Machine Learning Model Training
11 Train Fraud Detection Model
python src/ml/train_model.py

Generates:
- src/ml/fraud_model.pkl
- src/ml/scaler.pkl
- src/ml/metrics.json

## Running the Backend Server
1️⃣ Start FastAPI Server
uvicorn main:app --reload

🌐 Access API
Backend Server
```bash
http://127.0.0.1:8000
```

🧪 Testing APIs (Postman)
```bash
Authentication
POST http://127.0.0.1:8000/api/auth/register
POST http://127.0.0.1:8000/api/auth/login
POST http://127.0.0.1:8000/api/auth/forgot-password
POST http://127.0.0.1:8000/api/auth/reset-password

Predict Transaction (POST)
POST http://127.0.0.1:8000/api/predict

Fetch Transactions (GET)
http://127.0.0.1:8000/api/transactions

Fetch Model Performance Metrics (GET)
http://127.0.0.1:8000/api/metrics

Fetch all alert messages (GET)
http://127.0.0.1:8000/api/alert

Get a particular transaction by id (GET)
http://127.0.0.1:8000/api/transactions/{transaction_id}

Get all recent transactions info (GET)
GET http://127.0.0.1:8000/api/transactions/recent

Analytics average risk score (GET)
http://127.0.0.1:8000/api/transactions/analytics/risk-trend

Feedback Loop (POST)
http://127.0.0.1:8000/api/feedback

Dataset Download (GET)
http://127.0.0.1:8000/api/transactions/download/csv

```
---
## Model Metrics :
| Metrics | Value |
|---------|--------|
| accuracy | 0.931 |
| precision | 0.2631578947368421 |
| recall | 0.05813953488372093 |
| f1_score | 0.09523809523809523 |
| auc | 0.7517174698488627 |

----
## Backend Milestone Completion
### 🚩 Milestone 1 – Data Processing & Storage
- ✔ Raw transaction ingestion
- ✔ Data cleaning & feature engineering
- ✔ SQLite database integration
- ✔ EDA & visualization graphs

### 🚩 Milestone 2 – Machine Learning Pipeline
- ✔ Train/Test split
- ✔ Fraud classification model (Random Forest Classifer)
- ✔ Model evaluation metrics
- ✔ Model persistence (PKL files)

### 🚩 Milestone 3 – Real-Time Fraud Detection
- ✔ Real-time prediction API
- ✔ Rule-based fraud detection layer
- ✔ Fraud alert storage
- ✔ Gemini LLM-based risk explanation
- ✔ Explainable AI output

### 🚩 Milestone 4 – 
- ✔ Authentication (Register, Login, Forgot, Reset password)
- ✔ ML + Rules + LLM fully integrated
- ✔ Analytics APIs (risk trend, recent feed)
- ✔ Feedback loop for future retraining
-  ✔ End-to-end backend testing (Postman)
- ✔ Docker containerization
- ✔ Gunicorn + Nginx setup
- ✔ HTTPS-enabled cloud deployment on Render


### 🧠 LLM Explainability (Gemini)

- ✔️ Gemini API integration
- ✔️ Natural language fraud explanation
- ✔️ Graceful fallback if API key not configured

### 🚨 Fraud Alert System

- ✔️ `fraud_alerts` table created
- ✔️ Automatic alert insertion on fraud detection
- ✔️ Alert fields:
   - transaction_id
   - customer_id
   - risk_score
   - reason
   - timestamp

### 🗄️ Database Enhancements

- ✔️ Persistent alert storage
- ✔️ Clean separation of transaction vs alert data

### 🔐 Security & Config

- ✔️ API key loaded via `.env`
- ✔️ No hardcoded secrets
- ✔️ Production-ready environment handling
- ✔️ Feedback for the customer for future enhancements
- ✔️ Environment-based execution (local vs production)
- ✔️ Secure API key handling via .env
- ✔️ HTTPS termination at Nginx

**Outcome:**  
A **real-time, explainable fraud detection backend** ready for frontend integration.

---

## 🔮 Future Milestones 

- Kafka / Redis streaming
- BlockChain to enhance security
- Auto rule discovery using LLMs

---

## 👨‍💻 Author

**Anwesa Ghosh**  
Backend Developer | AI Intern Infosys SpringBoard  
Predictive_Transaction_Intelligence_using_for_BFSI – Infosys SpringBoard 6.0 Internship Project
If it helps you kindly give a star...




