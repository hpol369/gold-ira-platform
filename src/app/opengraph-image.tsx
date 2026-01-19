import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Rich Dad Retirement - Gold IRA Guide'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1a2e22', // Primary Dark Green
                    color: 'white',
                }}
            >
                {/* Background Pattern */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(212, 175, 55, 0.2) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(212, 175, 55, 0.2) 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                        opacity: 0.5,
                    }}
                />

                {/* Content */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    {/* Badge */}
                    <div style={{
                        backgroundColor: '#D4AF37',
                        color: '#1a2e22',
                        padding: '10px 24px',
                        borderRadius: '50px',
                        fontSize: 24,
                        fontWeight: 'bold',
                        marginBottom: 40,
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}>
                        2026 OFFICIAL GUIDE
                    </div>

                    {/* Title */}
                    <div style={{
                        fontSize: 84,
                        fontWeight: 900,
                        marginBottom: 20,
                        textAlign: 'center',
                        background: 'linear-gradient(to bottom right, #ffffff, #e2e2e2)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        lineHeight: 1.1,
                    }}>
                        Rich Dad Retirement
                    </div>

                    {/* Subtitle */}
                    <div style={{ fontSize: 36, color: '#e5e7eb', textAlign: 'center', maxWidth: 800 }}>
                        Protect Your Savings with Physical Gold & Silver
                    </div>
                </div>

                {/* Footer */}
                <div style={{
                    position: 'absolute',
                    bottom: 40,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    fontSize: 24,
                    color: '#D4AF37',
                    fontWeight: 600
                }}>
                    richdadretirement.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
