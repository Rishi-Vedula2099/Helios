export interface VehicleStats {
  id: string;
  speed: number;
  battery: number;
  temperature: number;
  timestamp: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Alert {
  id: string;
  type: 'info' | 'warning' | 'error';
  message: string;
  timestamp: string;
  vehicleId: string;
}

export interface FirmwareVersion {
  version: string;
  releaseDate: string;
  description: string;
  checksum: string;
}
