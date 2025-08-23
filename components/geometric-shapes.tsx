interface GeometricShapesProps {
  className?: string
}

export default function GeometricShapes({ className = "" }: GeometricShapesProps) {
  return (
    <div className={`${className} pointer-events-none`}>
      {/* Left side shapes */}
      <div className="absolute left-0 top-1/4">
        <div className="h-16 w-16 bg-primary/30 transform rotate-45 -translate-x-8"></div>
        <div className="h-16 w-16 bg-primary/20 transform rotate-45 translate-y-20 -translate-x-4"></div>
        <div className="h-16 w-16 bg-primary/10 transform rotate-45 translate-y-40"></div>
        <div className="h-16 w-16 bg-primary/5 transform rotate-45 translate-y-60 translate-x-4"></div>
      </div>

      {/* Right side shapes */}
      <div className="absolute right-0 top-1/3">
        <div className="h-20 w-20 bg-primary/20 transform rotate-45 translate-x-10"></div>
        <div className="h-20 w-20 bg-primary/10 transform rotate-45 translate-y-24 translate-x-6"></div>
        <div className="h-20 w-20 bg-primary/5 transform rotate-45 translate-y-48 translate-x-2"></div>
      </div>
    </div>
  )
}
