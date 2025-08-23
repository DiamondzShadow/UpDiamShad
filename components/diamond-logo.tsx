export default function DiamondLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a2be2" stopOpacity="1" />
          <stop offset="100%" stopColor="#4b0082" stopOpacity="1" />
        </linearGradient>
        <filter id="diamondGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Diamond Shape */}
      <polygon points="50,10 90,50 50,90 10,50" fill="url(#diamondGradient)" filter="url(#diamondGlow)" />

      {/* Inner Diamond Detail */}
      <polygon points="50,30 70,50 50,70 30,50" fill="#fff" fillOpacity="0.2" />
    </svg>
  )
}
