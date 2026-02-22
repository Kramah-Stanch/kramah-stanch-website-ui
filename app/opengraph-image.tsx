import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Kramah Stanch - Architecting the Intelligent Enterprise';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #000000, #111827)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* We can use the logo here if we read it, but text is safer and looks clean */}
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 'bold',
                        marginBottom: 24,
                        background: 'linear-gradient(to right, #ffffff, #9ca3af)',
                        backgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    Kramah Stanch
                </div>
                <div
                    style={{
                        fontSize: 36,
                        fontWeight: 'normal',
                        color: '#d1d5db',
                        textAlign: 'center',
                        maxWidth: '800px',
                        lineHeight: 1.4,
                    }}
                >
                    Architecting the Intelligent Enterprise
                </div>
                <div
                    style={{
                        marginTop: 48,
                        display: 'flex',
                        alignItems: 'center',
                        gap: "24px",
                        color: '#9ca3af',
                        fontSize: 24,
                    }}
                >
                    <span>SAP Transformations</span>
                    <span style={{ color: '#4b5563' }}>•</span>
                    <span>AWS Cloud Infrastructure</span>
                    <span style={{ color: '#4b5563' }}>•</span>
                    <span>AI Automation</span>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
