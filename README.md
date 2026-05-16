# Helios - Distributed AI Platform

Distributed AI Platform for Vehicle Monitoring, OTA, Embedded Systems & Autonomous Analytics.

## 🚀 Getting Started

### 1. Prerequisites
- Docker & Docker Compose
- Node.js 18+
- Python 3.9+

### 2. Infrastructure Setup
Spin up the database, message broker, and storage services:
```bash
docker-compose up -d
```

### 3. Backend Setup (Telemetry Service)
```bash
cd apps/telemetry-service
pip install -r requirements.txt
uvicorn main:socket_app --reload --port 8000
```

### 4. Frontend Setup
```bash
cd apps/frontend
npm install
npm run dev
```

### 5. Mock Vehicle Simulator
To see live data on the dashboard:
```bash
cd apps/embedded-simulator
pip install python-socketio
python mock_vehicle.py
```

---

## 🔑 Required APIs & Services

To make Helios production-ready, you will need the following:

### Core APIs
- **Mapbox API Key**: Required for the vehicle tracking map. Get it at [mapbox.com](https://www.mapbox.com/).
- **Ollama**: For local AI Diagnostics (Install from [ollama.com](https://ollama.com/)).
- **OpenAI API Key (Optional)**: If you prefer using GPT-4 instead of local models for fault explanation.

### Production Infrastructure
- **Cloud Provider**: Azure (ACR), AWS (ECR), or DockerHub for container registry.
- **Hosting**: Kubernetes cluster (AKS/EKS/GKE) for microservices orchestration.
- **Monitoring**: Prometheus & Grafana (configured in `infra/monitoring`).
- **Auth**: NextAuth.js or Clerk for user and fleet manager authentication.

---

## 📂 Project Structure
- `apps/`: Microservices (FastAPI, Next.js, etc.)
- `packages/`: Shared UI components and TypeScript definitions.
- `infra/`: Docker, K8s, and Terraform configurations.
- `ml/`: AI models for lane detection and diagnostics.
- `firmware/`: OTA update binaries and version history.
