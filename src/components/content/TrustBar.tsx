import { ShieldCheck, BookOpen, Clock, FileText } from "lucide-react";

interface TrustBarProps {
  updateDate?: string;
}

export function TrustBar({ updateDate }: TrustBarProps) {
  const displayDate = updateDate
    ? new Date(updateDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : "March 2026";

  return (
    <div className="bg-[#0C0D18] border-b border-[#2A2D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-xs text-[#A8A39A]">
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-3 w-3 text-green-600" />
            Fact-checked
          </span>
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-3 w-3 text-blue-600" />
            Editorially independent
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3 text-[#A8A39A]" />
            Updated {displayDate}
          </span>
          <span className="inline-flex items-center gap-1">
            <FileText className="h-3 w-3 text-[#A8A39A]" />
            Sources cited
          </span>
        </div>
      </div>
    </div>
  );
}
