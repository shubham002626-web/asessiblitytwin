import { Header } from "@/components/Header";
import { RotateCcw, Save, CheckCircle2, Camera, Info, Accessibility, ListOrdered, Globe, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function AnalysisResults() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header showAvatar={true} />

      <main className="flex-1 px-4 py-6 md:py-12 flex flex-col md:grid md:grid-cols-2 md:gap-8 max-w-5xl mx-auto w-full pb-32">
        
        {/* Left Column (Desktop) */}
        <div className="flex flex-col gap-4">
          {/* Title Section */}
        <section className="mb-2">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Analysis Results</p>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Building Entrance Assessment</h1>
        </section>

        {/* Action Buttons */}
        <section className="flex gap-3 mb-2">
          <Link href="/analyze" className="flex-1 bg-white border border-slate-200 text-slate-700 font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-sm">
            <RotateCcw size={16} />
            Retake Photo
          </Link>
          <button className="flex-1 bg-blue-600 text-white font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-sm text-sm">
            <Save size={16} />
            Save Report
          </button>
        </section>

        {/* Score Card */}
        <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex flex-col items-center text-center">
          {/* Circular Progress (CSS based) */}
          <div className="relative w-32 h-32 mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="10" />
              <circle 
                cx="50" cy="50" r="45" fill="none" stroke="#2563eb" strokeWidth="10" 
                strokeDasharray="283" strokeDashoffset="62" strokeLinecap="round" 
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-slate-900 leading-none">78</span>
              <span className="text-[10px] font-medium text-slate-500 mt-1">/ 100</span>
            </div>
          </div>
          
          <div className="inline-flex items-center gap-1.5 bg-green-400 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <CheckCircle2 size={14} />
            Good Rating
          </div>
          
          <p className="text-slate-600 text-xs leading-relaxed max-w-[280px]">
            This entrance meets basic accessibility standards but has minor areas for improvement.
          </p>
        </section>

        {/* Image Preview with Pins */}
        <section className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-200">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-300"></div>
          {/* Fake Image Background */}
          <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center"></div>
          
          {/* Pins */}
          <div className="absolute top-[45%] left-[30%] bg-green-600 text-white p-1 rounded-full border-2 border-white shadow-md">
            <Accessibility size={14} />
          </div>
          <div className="absolute top-[60%] right-[40%] bg-red-600 text-white p-1 rounded-full border-2 border-white shadow-md">
            <AlertTriangle size={14} />
          </div>

          {/* Floating Label */}
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded-md shadow-sm border border-slate-100 flex items-center gap-2">
            <Camera size={14} className="text-slate-600" />
            <span className="text-[10px] font-semibold text-slate-700 tracking-wide uppercase">Source Image Analysis</span>
          </div>
          </section>
        </div>

        {/* Right Column (Desktop) */}
        <div className="flex flex-col gap-4 mt-4 md:mt-0">
          {/* Info Cards */}
          <section className="flex gap-3">
          <div className="flex-1 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-4">
            <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-700 mb-3">
              <Accessibility size={16} />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ramp Access</p>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Yes</h3>
            <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
              <CheckCircle2 size={12} />
              Detected
            </div>
          </div>
          
          <div className="flex-1 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-4">
            <div className="w-8 h-8 bg-orange-100 rounded-md flex items-center justify-center text-orange-600 mb-3">
              <ListOrdered size={16} />
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Stairs Count</p>
            <h3 className="text-lg font-bold text-slate-900 mb-1">4</h3>
            <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
              <Info size={12} />
              Estimated
            </div>
          </div>
        </section>

        {/* SDG 11 Compliance Factors Card */}
        <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-5 mt-2">
          <div className="flex items-center gap-2 mb-6">
            <Globe size={18} className="text-blue-600" />
            <h3 className="font-semibold text-slate-900">SDG 11 Compliance Factors</h3>
          </div>

          <div className="space-y-6">
            {/* Entrance Inclusivity */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-semibold text-slate-800">Entrance Inclusivity</span>
                <span className="text-xs font-bold text-slate-500">85%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-green-600 rounded-full w-[85%]"></div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Wide doorway detected; automated entry unconfirmed.
              </p>
            </div>

            {/* Obstacle Clearance */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-semibold text-slate-800">Obstacle Clearance</span>
                <span className="text-xs font-bold text-slate-500">92%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-blue-600 rounded-full w-[92%]"></div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Clear path to entrance; minimal debris detected.
              </p>
            </div>

            {/* Surface Integrity */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-semibold text-slate-800">Surface Integrity</span>
                <span className="text-xs font-bold text-slate-500">68%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-orange-400 rounded-full w-[68%]"></div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Minor cracks detected on ramp surface; requires monitoring.
              </p>
            </div>
          </div>
          </section>
        </div>

      </main>
    </div>
  );
}
