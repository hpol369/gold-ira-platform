export function FadeIn({
    children,
    delay = 0,
    className,
    id
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    id?: string;
}) {
    return (
        <div
            id={id}
            className={className}
            style={{ animation: `fadeInUp 0.6s ease-out ${delay}s both` }}
        >
            {children}
        </div>
    );
}
