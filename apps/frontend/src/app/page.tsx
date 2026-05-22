"use client";

import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Gauge } from "@/components/ui/Gauge";
import { 
  TrendingUp, 
  Battery, 
  Thermometer, 
  Zap, 
  MapPin,
  AlertTriangle,
  ChevronRight
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const data = [
  { time: "10:00", speed: 45, battery: 85, temp: 32 },
  { time: "10:05", speed: 52, battery: 83, temp: 34 },
  { time: "10:10", speed: 48, battery: 82, temp: 33 },
  { time: "10:15", speed: 65, battery: 79, temp: 36 },
  { time: "10:20", speed: 58, battery: 77, temp: 35 },
  { time: "10:25", speed: 60, battery: 75, temp: 35 },
];

export default function Home() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        {/* Real-time Gauges */}
        <Gauge 
          value={65} 
          label="Current Speed" 
          unit="km/h" 
          color="#0284c7" 
        />
        <Gauge 
          value={75} 
          label="Battery Level" 
          unit="%" 
          color="#10b981" 
        />
        <Gauge 
          value={36} 
          label="Motor Temp" 
          unit="°C" 
          color="#f59e0b" 
        />
        <div className="glass p-6 rounded-2xl flex flex-col justify-between">
          <div>
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Active Alerts</span>
            <div className="mt-4 flex items-center gap-3 text-orange-600 bg-orange-50 p-3 rounded-xl border border-orange-100">
              <AlertTriangle className="w-5 h-5" />
              <span className="text-sm font-medium">Brake Wear Warning</span>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-slate-900 text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
            View All Alerts <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Historical Graph */}
        <div className="lg:col-span-2 glass p-6 rounded-2xl h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Performance Metrics
            </h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                Speed
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-wider border border-green-100">
                Battery
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0284c7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0284c7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '12px', 
                  border: '1px solid #e2e8f0',
                  backdropFilter: 'blur(8px)'
                }} 
              />
              <Area type="monotone" dataKey="speed" stroke="#0284c7" fillOpacity={1} fill="url(#colorSpeed)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Map Placeholder */}
        <div className="glass p-6 rounded-2xl flex flex-col">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Vehicle Location
          </h3>
          <div className="flex-1 bg-slate-100 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-200 border-dashed">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2 animate-bounce" />
              <p className="text-slate-500 text-sm">Mapbox Integration Pending</p>
              <p className="text-slate-400 text-xs mt-1">San Francisco, CA</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Longitude</span>
              <p className="text-sm font-semibold text-slate-700">-122.4194</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Latitude</span>
              <p className="text-sm font-semibold text-slate-700">37.7749</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
