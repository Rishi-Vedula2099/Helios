import asyncio
import json
import random
import time
from datetime import datetime
import socketio

sio = socketio.AsyncClient()

VEHICLE_ID = "HELIOS-SF-01"

async def generate_telemetry():
    await sio.connect('http://localhost:8000')
    print(f"Connected to telemetry service as {VEHICLE_ID}")
    
    speed = 45.0
    battery = 85.0
    temp = 32.0
    
    while True:
        # Mocking some fluctuations
        speed += random.uniform(-2, 2)
        speed = max(0, min(120, speed))
        
        battery -= 0.01
        battery = max(0, battery)
        
        temp += random.uniform(-0.5, 0.5)
        temp = max(20, min(90, temp))
        
        payload = {
            "id": VEHICLE_ID,
            "speed": round(speed, 2),
            "battery": round(battery, 2),
            "temperature": round(temp, 2),
            "timestamp": datetime.now().isoformat(),
            "location": {
                "lat": 37.7749 + random.uniform(-0.001, 0.001),
                "lng": -122.4194 + random.uniform(-0.001, 0.001)
            }
        }
        
        print(f"Sending telemetry: {payload['speed']} km/h | {payload['battery']}%")
        await sio.emit('telemetry_update', payload)
        await asyncio.sleep(1)

if __name__ == "__main__":
    try:
        asyncio.run(generate_telemetry())
    except KeyboardInterrupt:
        print("Simulator stopped.")
