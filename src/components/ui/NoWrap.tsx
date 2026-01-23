// Utility component to prevent text from wrapping
// Use for company names, prices, ratings, etc.

interface NoWrapProps {
  children: React.ReactNode;
  className?: string;
}

export function NoWrap({ children, className = "" }: NoWrapProps) {
  return (
    <span className={`whitespace-nowrap ${className}`.trim()}>
      {children}
    </span>
  );
}
