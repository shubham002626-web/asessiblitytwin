import { Header } from "@/components/Header";
import { CloudUpload, Eye, Navigation, Sun, Upload } from "lucide-react";
import Link from "next/link";

export default function Analyze() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header showAvatar={true} />

      <main className="flex-1 px-5 py-6 md:py-12 flex flex-col gap-6 max-w-4xl mx-auto w-full pb-32">
        
        {/* Title Section */}
        <section className="text-center mt-2 px-2">
          <h1 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">Analyze Infrastructure</h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Upload photos of building entrances, footpaths, or transit stops.
          </p>
        </section>

        {/* Upload Area */}
        <section className="mt-2 relative">
          {/* Dashed border wrapper - SVG for perfect dashed corners or just css */}
          <div className="w-full bg-white border-2 border-dashed border-slate-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <CloudUpload size={40} className="text-slate-400 mb-4" strokeWidth={1.5} />
            <h3 className="font-semibold text-slate-900 mb-2">Click or drag images here</h3>
            <p className="text-slate-500 text-xs max-w-[200px]">
              Supported formats: JPG, PNG. Max 10MB per file.
            </p>
          </div>
        </section>

        {/* Capture Guidelines */}
        <section className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 p-5 mt-2">
          <h3 className="font-semibold text-slate-900 mb-4">Capture Guidelines</h3>
          
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-4 pb-5 flex flex-col gap-3">
              <Eye size={18} className="text-green-600" />
              <span className="text-sm text-slate-700">Ensure entrance is visible</span>
            </div>
            
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-4 pb-5 flex flex-col gap-3">
              <Navigation size={18} className="text-green-600" />
              <span className="text-sm text-slate-700">Include context like steps/ramps</span>
            </div>
            
            <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-4 pb-5 flex flex-col gap-3">
              <Sun size={18} className="text-red-500" />
              <span className="text-sm text-slate-700">Avoid heavy glare</span>
            </div>
          </div>
        </section>

        {/* Action Button */}
        <Link href="/analyze/results" className="w-full mt-2 bg-blue-700 text-white font-medium py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-sm tracking-wide">
          <Upload size={18} className="mr-1" />
          Upload & Analyze
        </Link>
        
      </main>
    </div>
  );
}
