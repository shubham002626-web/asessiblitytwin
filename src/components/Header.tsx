import { Building2 } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  showTrialButton?: boolean;
  showAvatar?: boolean;
}

export function Header({ showTrialButton = false, showAvatar = false }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-4 bg-slate-50/80 backdrop-blur-md sticky top-0 z-40">
      <div className="flex items-center gap-2">
        <Building2 className="text-blue-600" size={24} />
        <span className="font-bold text-xl text-blue-600 tracking-tight">Accessibility Twin</span>
      </div>
      
      {showTrialButton && (
        <button className="bg-blue-600 text-white text-xs font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Start Free Trial
        </button>
      )}

      {showAvatar && (
        <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 bg-slate-200 flex-shrink-0">
          <div className="w-full h-full bg-slate-300 flex items-center justify-center">
            {/* Using a placeholder for avatar since no image is provided */}
            <span className="text-xs text-slate-500 font-medium">JD</span>
          </div>
        </div>
      )}
    </header>
  );
}
