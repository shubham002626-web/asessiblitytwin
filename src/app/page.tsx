import { Header } from "@/components/Header";
import { CheckCircle2, Globe, Calendar, PlayCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header showTrialButton={true} />

      <main className="flex-1 px-4 py-8 md:py-16 max-w-5xl mx-auto w-full flex flex-col gap-8 pb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-6 mt-4 md:mt-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium border border-blue-200">
            <CheckCircle2 size={14} className="text-blue-600" />
            <span>v2.0 Platform Release</span>
          </div>

          <h1 className="text-[38px] md:text-6xl leading-[1.1] font-bold text-slate-900 tracking-tight">
            Making Cities <br className="md:hidden" />
            Navigable <br className="md:hidden" />
            <span className="text-blue-700 relative inline-block mt-2 md:mt-0 md:ml-3">
              for Everyone
              {/* Green underline SVG/div */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5 L 100 8 Q 50 13 0 8 Z" fill="currentColor" />
              </svg>
            </span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-[300px] md:max-w-2xl mt-2">
            Leverage AI-powered urban analysis to create comprehensive accessibility digital twins. Transform raw city data into actionable insights for sustainable, inclusive communities.
          </p>

          <div className="flex flex-col md:flex-row w-full max-w-md gap-3 mt-4">
            <button className="w-full flex-1 bg-blue-600 text-white font-medium py-3.5 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Start Free Trial
            </button>
            <button className="w-full flex-1 bg-white text-slate-700 border border-slate-200 font-medium py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
              <PlayCircle size={18} />
              View Platform Demo
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 md:mt-12">
          {/* Index Card */}
          <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-5 lg:col-span-1 md:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <h2 className="font-semibold text-slate-900 text-lg leading-tight w-2/3">Urban Accessibility Index</h2>
            <div className="flex items-center gap-1.5 text-slate-500 bg-slate-50 px-2 py-1 rounded-md text-xs border border-slate-100">
              <Calendar size={12} />
              <span className="flex flex-col text-[10px] leading-tight">
                <span>Last 30</span>
                <span>Days</span>
              </span>
            </div>
          </div>
          
          <div className="w-full aspect-[4/3] bg-slate-100 rounded-lg border border-slate-200 overflow-hidden relative flex items-center justify-center">
            {/* Map placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200" />
            <div className="relative text-slate-400 font-medium text-sm">Interactive Map View</div>
            
            {/* Fake UI elements for the map mockup */}
            <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[8px] p-1 rounded border border-slate-200 shadow-sm flex items-center gap-1">
               <div className="w-2 h-2 bg-blue-600 rounded-full"></div> CityFlow
            </div>
          </div>
        </section>

          {/* Status Card */}
          <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-5 relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-green-400 rounded-lg flex items-center justify-center shadow-inner text-white">
               <CheckCircle2 size={24} />
            </div>
            <div className="bg-green-400 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">
              Active
            </div>
          </div>
          
          <p className="text-slate-500 text-xs mb-1">Status</p>
          <h3 className="font-bold text-slate-900 text-lg mb-4">Route Verified</h3>
          
          <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-green-600 rounded-full w-[85%]"></div>
          </div>
          <p className="text-slate-500 text-[10px]">85% of core city transit paths mapped</p>
        </section>

          {/* SDG 11 Alignment Card */}
          <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Globe size={18} className="text-blue-600" />
            <h3 className="font-semibold text-slate-900 text-sm">SDG 11 Alignment</h3>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mb-5 pr-4">
            Sustainable Cities and Communities metrics tracking.
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-600 text-xs">Public Transport</span>
              <span className="text-blue-700 font-bold text-xs">92/100</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 text-xs">Wheelchair Access</span>
              <span className="text-amber-700 font-bold text-xs">78/100</span>
            </div>
          </div>
          </section>
        </div>
      </main>
    </div>
  );
}
