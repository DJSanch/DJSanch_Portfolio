"use client"

const GradientOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-violet-500/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-indigo-500/30 rounded-full blur-3xl animate-pulse-slow" />
    </div>
  )
}

export default GradientOrbs
