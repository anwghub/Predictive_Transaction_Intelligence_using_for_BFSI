FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

# Install system dependencies
RUN apt-get update \
    && apt-get install -y --no-install-recommends build-essential gcc \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Create non-root user
RUN useradd -m appuser && chown -R appuser /app
USER appuser

EXPOSE 8000

# Run Gunicorn with Uvicorn worker (Render-safe)
CMD gunicorn main:app \
  -k uvicorn.workers.UvicornWorker \
  --workers 1 \
  --threads 2 \
  --bind 0.0.0.0:$PORT
