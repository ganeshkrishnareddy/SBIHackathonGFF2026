import React from "react";
import { Sparkles, Shield, RefreshCw } from "lucide-react";

interface SBIHeaderProps {
  onReset: () => void;
  onSelectPreset: (presetType: string) => void;
  apiKeyActive: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const SBIHeader: React.FC<SBIHeaderProps> = ({ 
  onReset, 
  onSelectPreset, 
  apiKeyActive,
  activeTab,
  setActiveTab
}) => {
  return (
    <nav className="h-12 border-b border-white/10 flex items-center justify-between px-4 lg:px-6 bg-[#020617]/90 backdrop-blur-md sticky top-0 z-50 w-full overflow-x-auto" id="sbi-header-container">
      {/* Left Side: Brand and Identity */}
      <div className="flex items-center gap-2.5 shrink-0">
        <div className="w-7 h-7 rounded bg-gradient-to-br from-[#00A3A3] to-[#005252] flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-[#00A3A3]/25" id="sbi-brand-icon-wrapper">
          <span className="font-display">S</span>
        </div>
        <span className="text-[15px] font-semibold tracking-tight text-white font-display whitespace-nowrap">
          SBI Sarathi
        </span>
        <span className="text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#00CCCC]/10 text-[#00CCCC] font-mono border border-[#00CCCC]/20 whitespace-nowrap leading-none">
          Digital Client Hub
        </span>
      </div>

      {/* Center: Navigation Tabs */}
      <div className="flex items-center gap-5 text-xs font-medium text-slate-400 shrink-0 ml-6">
        <button
          onClick={() => setActiveTab("monitor")}
          className={`cursor-pointer transition-colors whitespace-nowrap pb-0.5 ${
            activeTab === "monitor" 
              ? "text-white border-b-2 border-[#00CCCC]" 
              : "hover:text-white"
          }`}
        >
          Advisor Workspace
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={`cursor-pointer transition-colors whitespace-nowrap pb-0.5 ${
            activeTab === "security"
              ? "text-white border-b-2 border-[#00CCCC]" 
              : "hover:text-white"
          }`}
        >
          Security & Controls
        </button>
        <button
          onClick={() => setActiveTab("crm")}
          className={`cursor-pointer transition-colors whitespace-nowrap pb-0.5 ${
            activeTab === "crm" 
              ? "text-white border-b-2 border-[#00CCCC]" 
              : "hover:text-white"
          }`}
        >
          Client Registrations
        </button>
      </div>

      {/* Right Side: Scenarios, Status, Reset */}
      <div className="flex items-center gap-3 shrink-0 ml-auto pl-4">
        {/* Preset Buttons & Controller */}
        <div className="flex items-center gap-1 bg-[#0a1224] border border-white/5 rounded-md px-1.5 py-0.5 text-[10px] font-mono">
          <span className="text-slate-500 font-medium px-1 select-none whitespace-nowrap">Scenarios:</span>
          <button
            onClick={() => onSelectPreset("general")}
            className="px-1.5 py-0.5 bg-[#1e293b]/60 hover:bg-[#1e293b] text-[#e2e8f0] rounded transition cursor-pointer whitespace-nowrap"
            id="preset-savings"
          >
            Savings Inquiry
          </button>
          <button
            onClick={() => onSelectPreset("invest")}
            className="px-1.5 py-0.5 bg-[#1e293b]/60 hover:bg-[#1e293b] text-[#e2e8f0] rounded transition cursor-pointer whitespace-nowrap"
            id="preset-invest"
          >
            SIP Wealth Inquiry
          </button>
          <button
            onClick={() => onSelectPreset("injection")}
            className="px-1.5 py-0.5 bg-red-950/40 hover:bg-red-900/50 text-red-400 border border-red-500/10 rounded transition cursor-pointer flex items-center gap-1 whitespace-nowrap"
            id="preset-guardrail"
          >
            <Shield className="h-2.5 w-2.5 animate-pulse" /> Compliance Probe
          </button>
        </div>

        {/* Live Simulation Key */}
        <div className="px-2 py-0.5 rounded bg-[#00CCCC]/5 border border-[#00CCCC]/10 text-[#00CCCC] text-[9px] font-bold flex items-center gap-1.5 font-mono whitespace-nowrap">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00CCCC] shadow-[0_0_8px_#00CCCC] animate-pulse"></div>
          {apiKeyActive ? "GEMINI LIVE" : "SIM ENGINE"}
        </div>

        {/* Reset btn */}
        <button
          onClick={onReset}
          className="p-1 hover:bg-white/10 text-slate-400 hover:text-white rounded transition shrink-0"
          title="Reset State"
          id="reset-demo-button"
        >
          <RefreshCw className="h-3.5 w-3.5" />
        </button>
      </div>
    </nav>
  );
};

