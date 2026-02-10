export function FadeIn({
    children,
    delay = 0,
    className
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <div
            className={className}
            style={{ animation: `fadeInUp 0.6s ease-out ${delay}s both` }}
        >
            {children}
        </div>
    );
}
