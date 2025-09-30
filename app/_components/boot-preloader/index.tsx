'use client'

import { Loader2, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function BootPreloader({ onSkip }: { onSkip: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="flex min-h-[100vh] w-full items-center justify-center overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Initializing app and requesting your location"
    >
      <div
        className={`from-card/95 to-background/90 border-border text-foreground dark:from-card/80 dark:to-background/80 relative flex w-[32rem] max-w-[90vw] flex-col items-center justify-center gap-6 rounded-2xl border bg-gradient-to-br p-12 shadow-2xl shadow-black/10 backdrop-blur-xl transition-all duration-700 dark:shadow-black/40 ${mounted ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="animate-pulse-slow absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/15 via-orange-500/12 to-blue-700/15 blur-3xl dark:from-blue-700/25 dark:via-orange-500/18 dark:to-blue-500/20" />
        </div>

        <div className="relative" aria-hidden>
          <div className="relative drop-shadow-2xl">
            <svg
              width="160"
              height="160"
              viewBox="0 0 160 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="sun-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FCD34D" />
                  <stop offset="100%" stopColor="var(--orange-500)" />
                </linearGradient>
                <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="var(--color-neutral-200)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g className="sun-rays" style={{ transformOrigin: '80px 60px' }}>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <line
                    key={i}
                    x1="80"
                    y1="60"
                    x2="80"
                    y2="35"
                    stroke="url(#sun-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    transform={`rotate(${angle} 80 60)`}
                    className="sun-ray"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </g>

              <circle
                cx="80"
                cy="60"
                r="20"
                fill="url(#sun-gradient)"
                filter="url(#glow)"
                className="sun-core"
              />

              <g className="cloud-float">
                <ellipse
                  cx="75"
                  cy="95"
                  rx="28"
                  ry="18"
                  fill="url(#cloud-gradient)"
                  opacity="0.95"
                />
                <ellipse
                  cx="100"
                  cy="95"
                  rx="24"
                  ry="16"
                  fill="url(#cloud-gradient)"
                  opacity="0.95"
                />
                <ellipse
                  cx="58"
                  cy="98"
                  rx="18"
                  ry="14"
                  fill="url(#cloud-gradient)"
                  opacity="0.95"
                />
                <ellipse cx="87" cy="88" rx="20" ry="15" fill="url(#cloud-gradient)" />
              </g>

              <g className="rain-drops">
                {[0, 1, 2, 3, 4].map((i) => (
                  <path
                    key={i}
                    d={`M${60 + i * 12} 115 Q${60 + i * 12} 120 ${60 + i * 12} 125`}
                    stroke="var(--color-blue-500)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                    className="rain-drop"
                    style={{ animationDelay: `${i * 0.15}s` }}
                    opacity="0.85"
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 animate-ping">
            <MapPin className="text-foreground/25 h-6 w-6" />
          </div>
          <MapPin className="animate-bounce-subtle text-foreground/80 relative h-6 w-6" />
        </div>

        <div className="space-y-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-foreground text-lg font-semibold">Requesting location access</h2>
            <Loader2 className="text-foreground/80 h-4 w-4 animate-spin" />
          </div>
          <p className="text-muted-foreground max-w-xs text-sm">
            We need your location to provide accurate weather information for your area
          </p>
        </div>

        <div className="bg-muted h-1 w-full max-w-xs overflow-hidden rounded-full">
          <div className="animate-progress h-full bg-gradient-to-r from-blue-500 via-orange-500 to-blue-700 dark:from-blue-700 dark:via-orange-500 dark:to-blue-500" />
        </div>

        <button
          type="button"
          onClick={onSkip}
          className="group border-border bg-muted/50 text-foreground hover:bg-muted relative mt-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <span className="flex items-center gap-2">
            Use default location
            <span className="text-muted-foreground group-hover:text-foreground text-xs transition-colors">
              (London)
            </span>
          </span>
        </button>

        <style jsx>{`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes pulse-slow {
            0%,
            100% {
              opacity: 0.5;
            }
            50% {
              opacity: 0.85;
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            33% {
              transform: translateY(-4px) translateX(2px);
            }
            66% {
              transform: translateY(-2px) translateX(-2px);
            }
          }
          @keyframes rain-fall {
            0% {
              transform: translateY(0);
              opacity: 0;
            }
            10% {
              opacity: 0.9;
            }
            90% {
              opacity: 0.9;
            }
            100% {
              transform: translateY(25px);
              opacity: 0;
            }
          }
          @keyframes ray-pulse {
            0%,
            100% {
              opacity: 0.3;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes progress {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          @keyframes bounce-subtle {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          .sun-rays {
            animation: rotate 20s linear infinite;
          }
          .sun-ray {
            animation: ray-pulse 2s ease-in-out infinite;
          }
          .sun-core {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          .cloud-float {
            animation: float 6s ease-in-out infinite;
          }
          .rain-drop {
            animation: rain-fall 1.5s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulse-slow 4s ease-in-out infinite;
          }
          .animate-progress {
            animation: progress 2s ease-in-out infinite;
          }
          .animate-bounce-subtle {
            animation: bounce-subtle 2s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .sun-rays,
            .sun-ray,
            .sun-core,
            .cloud-float,
            .rain-drop,
            .animate-pulse-slow,
            .animate-progress,
            .animate-bounce-subtle {
              animation: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
