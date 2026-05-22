"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Settings, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  CloudDownload, 
  Users, 
  FileText,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const SidebarItem = ({ icon: Icon, label, active }: SidebarItemProps) => (
  <div className={cn(
    "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group",
    active ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
  )}>
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </div>
);

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 glass border-r border-slate-200 flex flex-col p-6 z-20">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Activity className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold font-orbitron tracking-tighter text-slate-900">HELIOS</h1>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
          <SidebarItem icon={Users} label="Fleet Management" />
          <SidebarItem icon={Cpu} label="Embedded Simulator" />
          <SidebarItem icon={CloudDownload} label="OTA Updates" />
          <SidebarItem icon={ShieldCheck} label="AI Diagnostics" />
          <SidebarItem icon={Activity} label="Monitoring" />
          <SidebarItem icon={FileText} label="Reports" />
        </nav>

        <div className="pt-6 border-t border-slate-200">
          <SidebarItem icon={Settings} label="Admin Panel" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header */}
        <header className="h-16 glass border-b border-slate-200 flex items-center justify-between px-8 z-10">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6 text-slate-500 cursor-pointer lg:hidden" />
            <h2 className="text-lg font-semibold text-slate-800">Fleet Dashboard</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Live System
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
