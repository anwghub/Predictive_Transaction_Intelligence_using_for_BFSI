from flask import Flask
from src.preprocessing import run_processing

app = Flask(__name__)

@app.route("/")
def home():
    return "Flask app is running!"

@app.route("/process")
def process():
    run_processing()
    return "Processing completed!"

if __name__ == "__main__":
    run_processing()
    
    # Run Flask app on port 8000
    app.run(host="0.0.0.0", port=8000, debug=True)
