import { Header } from "@/components/Header";
import { Search, SlidersHorizontal, Accessibility, Camera, AlertTriangle, User, Wrench, Crosshair, Plus, Minus } from "lucide-react";

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-slate-100">
      
      {/* Background Map Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-50 opacity-90 mix-blend-multiply"></div>
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40 grayscale-[0.2]"
        ></div>
        
        {/* Fake streets/lines for map feel */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="30%" stroke="#3b82f6" strokeWidth="4" />
          <line x1="30%" y1="0" x2="40%" y2="100%" stroke="#cbd5e1" strokeWidth="6" />
          <line x1="10%" y1="60%" x2="100%" y2="50%" stroke="#cbd5e1" strokeWidth="8" />
          <line x1="70%" y1="0" x2="60%" y2="100%" stroke="#3b82f6" strokeWidth="3" />
        </svg>

        {/* City Label */}
        <div className="absolute top-[48%] left-[38%] text-3xl font-medium text-slate-800 drop-shadow-md">
          Seattle
        </div>
      </div>

      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        
        {/* Header needs pointer events */}
        <div className="pointer-events-auto shadow-sm">
          <Header showAvatar={true} />
        </div>

        <main className="flex-1 relative pointer-events-auto">
          {/* Search Bar */}
          <div className="absolute top-4 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-96 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 p-3 flex items-center gap-3 transition-all">
            <Search size={20} className="text-slate-400 flex-shrink-0" />
            <input 
              type="text" 
              placeholder="Search locations, streets..." 
              className="flex-1 bg-transparent border-none outline-none text-slate-700 text-sm placeholder:text-slate-400"
              readOnly
            />
            <SlidersHorizontal size={20} className="text-slate-500 flex-shrink-0" />
          </div>

          {/* Filter Chips */}
          <div className="absolute top-20 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[480px] flex md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide transition-all">
            <button className="flex-shrink-0 bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide shadow-sm">
              All Scores
            </button>
            <button className="flex-shrink-0 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-600"></span> High
            </button>
            <button className="flex-shrink-0 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span> Med
            </button>
            <button className="flex-shrink-0 bg-white border border-slate-200 text-slate-700 px-4 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-red-600"></span> Low
            </button>
          </div>

          {/* Map Markers */}
          {/* Wheelchair Pin */}
          <div className="absolute top-[35%] left-[25%] flex flex-col items-center group">
            <div className="bg-green-700 text-white p-1.5 rounded-full shadow-md border-2 border-white relative z-10">
              <Accessibility size={16} />
            </div>
            <div className="w-1 h-3 bg-green-700 -mt-1"></div>
          </div>

          {/* Camera Pin 1 */}
          <div className="absolute top-[42%] left-[32%] flex flex-col items-center">
            <div className="bg-purple-500 text-white p-1 rounded-full shadow-md border-2 border-white relative z-10">
              <Camera size={14} />
            </div>
            <div className="w-0.5 h-2 bg-purple-500 -mt-1"></div>
          </div>
          
          {/* Camera Pin 2 */}
          <div className="absolute top-[60%] left-[8%] flex flex-col items-center">
            <div className="bg-purple-500 text-white p-1.5 rounded-full shadow-md border-2 border-white relative z-10">
              <Camera size={16} />
            </div>
            <div className="w-1 h-3 bg-purple-500 -mt-1"></div>
          </div>

          {/* Warning Pin (Large) */}
          <div className="absolute top-[46%] left-[62%] flex flex-col items-center z-20">
            <div className="bg-red-700 text-white p-3 rounded-full shadow-lg border-2 border-white relative z-10">
              <AlertTriangle size={24} />
            </div>
            <div className="w-1.5 h-4 bg-red-700 -mt-1"></div>
          </div>

          {/* Person Pin */}
          <div className="absolute top-[58%] left-[45%] flex flex-col items-center">
            <div className="bg-orange-500 text-white p-1.5 rounded-full shadow-md border-2 border-white relative z-10">
              <User size={16} />
            </div>
            <div className="w-1 h-4 bg-orange-500 -mt-1"></div>
          </div>

          {/* Popup Card next to Warning Pin */}
          <div className="absolute top-[44%] left-[76%] bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 p-4 w-[240px] z-30">
            <h3 className="font-bold text-slate-900 mb-2 truncate">Pine St Crosswalk</h3>
            <div className="flex items-start gap-2 mb-4">
              <Wrench size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-slate-600 leading-relaxed">
                Temporary construction blocking tactile paving. Ramp slope exceeds max grade.
              </p>
            </div>
            <button className="w-full bg-blue-50 text-blue-700 font-medium py-2 rounded-md text-xs tracking-wider uppercase hover:bg-blue-100 transition-colors">
              View Details
            </button>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-6 right-4 flex flex-col gap-3 z-20">
            <button className="w-12 h-12 bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center text-blue-600 hover:bg-slate-50">
              <Crosshair size={22} />
            </button>
            <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col overflow-hidden">
              <button className="w-12 h-12 flex items-center justify-center text-slate-700 border-b border-slate-100 hover:bg-slate-50">
                <Plus size={22} strokeWidth={2} />
              </button>
              <button className="w-12 h-12 flex items-center justify-center text-slate-700 hover:bg-slate-50">
                <Minus size={22} strokeWidth={2} />
              </button>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
