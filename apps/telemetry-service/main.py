from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import socketio

app = FastAPI(title="Helios Telemetry Service")

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Socket.IO setup
sio = socketio.AsyncServer(async_mode='asgi', cors_allowed_origins='*')
socket_app = socketio.ASGIApp(sio, app)

@app.get("/")
async def root():
    return {"status": "online", "service": "telemetry"}

@sio.event
async def connect(sid, environ):
    print(f"Client connected: {sid}")

@sio.event
async def disconnect(sid):
    print(f"Client disconnected: {sid}")

@sio.event
async def telemetry_update(sid, data):
    # Broadcast to all connected clients (dashboards)
    await sio.emit('dashboard_update', data)
    print(f"Received from {data['id']}: {data['speed']} km/h")

# To run: uvicorn main:socket_app --reload --port 8000
