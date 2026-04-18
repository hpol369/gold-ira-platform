import { FileText } from "lucide-react";

interface Source {
  name: string;
  url: string;
  accessDate?: string;
}

interface SourcesSectionProps {
  sources: Source[];
  lastVerified?: string;
}

export function SourcesSection({ sources, lastVerified }: SourcesSectionProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-[#2A2D42]">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="h-5 w-5 text-[#A8A39A]" />
        <h3 className="text-lg font-bold text-[#F6F4EF]">Sources &amp; References</h3>
      </div>
      <ol className="list-decimal list-inside space-y-2 text-sm text-[#D0CCC4]">
        {sources.map((source, i) => (
          <li key={i}>
            <a
              href={source.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              {source.name}
            </a>
            {source.accessDate && (
              <span className="text-[#A8A39A] ml-1">— Accessed {source.accessDate}</span>
            )}
          </li>
        ))}
      </ol>
      {lastVerified && (
        <p className="text-xs text-[#A8A39A] mt-3">
          Last verified: {lastVerified}
        </p>
      )}
    </section>
  );
}
