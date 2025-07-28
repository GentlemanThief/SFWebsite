export default function SectionDescription({ children }) {
    return (
      <div className="max-w-5xl mx-auto px-6">
        {/* Tight background container around text */}
        <div className="relative py-3 px-12 mx-auto max-w-6xl bg-base-100">
          {/* Subtle top accent line */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent mx-auto mb-3"></div>
          
          {/* Enhanced text styling */}
          <p className="text-base-content/90 text-xs sm:text-base leading-snug text-center font-light tracking-wide">
            <span className="text-secondary/80 font-medium">&ldquo;</span>
            {children}
            <span className="text-primary/80 font-medium">&rdquo;</span>
          </p>
          
          {/* Subtle bottom accent line */}
          <div className="w-12 h-0.5 bg-gradient-to-l from-secondary/30 to-transparent mx-auto mt-3"></div>
        </div>
      </div>
    );
  }