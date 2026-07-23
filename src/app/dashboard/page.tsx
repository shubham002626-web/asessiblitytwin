import { Header } from "@/components/Header";
import { TrendingUp, Accessibility, ClipboardCheck, Compass, Clock, Globe, CheckCircle2, ExternalLink, Plus, Minus, FileText } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header showAvatar={true} />

      <main className="flex-1 px-4 py-6 md:py-12 flex flex-col gap-4 md:gap-8 max-w-6xl mx-auto w-full pb-32">
        
        {/* Title Section */}
        <section className="mb-2">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight mb-1">Urban Impact Overview</h1>
          <p className="text-slate-600 text-sm leading-relaxed pr-4">
            Comprehensive analysis of city-wide accessibility metrics and SDG 11 compliance tracking.
          </p>
        </section>

        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Global Accessibility Score Card */}
          <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-5 relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2 text-slate-500">
            <TrendingUp size={14} className="text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Global Accessibility Score</span>
          </div>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-[42px] font-bold text-blue-700 leading-none">84.2</span>
            <span className="text-green-600 text-xs font-bold">+2.4% YoY</span>
          </div>
          
          <div className="w-full h-1.5 bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-700 rounded-full w-[84.2%]"></div>
          </div>
          
          {/* Watermark Icon */}
          <Accessibility size={80} className="absolute -right-4 -top-2 text-slate-100/70" strokeWidth={1} />
        </section>

        {/* Audited Infrastructure Card */}
        <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-5 relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2 text-slate-500">
            <ClipboardCheck size={14} className="text-amber-700" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Audited Infrastructure</span>
          </div>
          
          <div className="flex items-baseline gap-1.5 mb-4">
            <span className="text-[38px] font-bold text-slate-900 leading-none">12,450</span>
            <span className="text-slate-500 text-xs font-medium">units</span>
          </div>
          
          <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
            <Clock size={12} />
            Last updated 2h ago
          </div>
          
          {/* Watermark Icon */}
          <Compass size={80} className="absolute -right-4 top-2 text-amber-50/50" strokeWidth={1} />
        </section>

        {/* SDG 11 Compliance Status Card */}
        <section className="bg-white rounded-r-xl rounded-l shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 border-l-4 border-l-green-500 p-5">
          <div className="flex items-center gap-1.5 mb-3 text-slate-500">
            <Globe size={14} className="text-green-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest">SDG 11 Compliance Status</span>
          </div>
          
          <div className="inline-flex items-center gap-1.5 bg-green-400 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-3">
            <CheckCircle2 size={14} />
            On Track
          </div>
          
          <p className="text-slate-600 text-xs leading-relaxed max-w-[280px]">
            Meeting key targets for inclusive and sustainable urbanization.
          </p>
          </section>
        </div>

        {/* Bottom Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mt-2 md:mt-0">
          {/* Accessibility Density Map */}
          <section className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-slate-900">Accessibility Density Map</h3>
            <Link href="/map" className="flex items-center gap-1 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              View Full Map
              <ExternalLink size={12} />
            </Link>
          </div>
          
          <div className="relative w-full aspect-square md:aspect-video lg:aspect-square rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-200 flex-1">
            {/* Fake Map Background */}
            <div className="absolute inset-0 bg-blue-100 opacity-80"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay"></div>
            
            {/* Heatmap overlay fake */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/60 via-transparent to-transparent opacity-80"></div>
            
            {/* Legend */}
            <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-2 rounded-lg shadow-sm border border-slate-100">
              <span className="text-[10px] font-semibold text-slate-700 tracking-wide mb-1 block">Density Legend</span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-slate-500">Low</span>
                <div className="w-16 h-1.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-700 rounded-full"></div>
                <span className="text-[9px] text-slate-500">High</span>
              </div>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur rounded-lg shadow-sm border border-slate-100 flex flex-col">
              <button className="p-2 border-b border-slate-100 hover:bg-slate-50 text-slate-700">
                <Plus size={16} strokeWidth={2.5} />
              </button>
              <button className="p-2 hover:bg-slate-50 text-slate-700">
                <Minus size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </section>

          {/* Recent Audits */}
          <section className="flex flex-col h-full">
          <h3 className="font-bold text-slate-900 mb-4">Recent Audits</h3>
          
          <div className="flex flex-col gap-3 mb-4">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 border border-green-100">
                <CheckCircle2 size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-slate-900 truncate">Central Station Access</h4>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className="text-slate-500">Today, 09:42 AM</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-green-600 font-bold tracking-wide">Verified</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 flex-shrink-0 border border-orange-100">
                <ClipboardCheck size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-slate-900 truncate">Riverfront Promenade</h4>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className="text-slate-500">Yesterday, 14:15 PM</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-orange-600 font-bold tracking-wide">Under Review</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 border border-green-100">
                <CheckCircle2 size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-slate-900 truncate">Civic Center Ramps</h4>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className="text-slate-500">Oct 24, 11:00 AM</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-green-600 font-bold tracking-wide">Verified</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 flex-shrink-0 border border-slate-200">
                <FileText size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-slate-900 truncate">Northside Transit Hub</h4>
                <div className="flex items-center gap-1.5 text-[11px]">
                  <span className="text-slate-500">Draft</span>
                </div>
              </div>
            </div>

          </div>

          <button className="w-full mt-auto bg-white text-blue-700 border border-slate-200 font-semibold text-xs tracking-widest uppercase py-3 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
            View All Audits
          </button>
        </section>
        </div>

      </main>
    </div>
  );
}
