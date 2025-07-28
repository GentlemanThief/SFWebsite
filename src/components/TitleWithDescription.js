import dynamic from "next/dynamic";

export default function TitleWithDescription({ title, description }) {
  return (
    <div className="relative py-3 px-4 bg-base-100">
      {/* Subtle background accent elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent"></div>

      {/* Main container */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-6 gap-4 xl:gap-3 items-center">
        {/* Title Section - Left */}
        <div className="text-center xl:text-left xl:col-span-2 xl:pl-14">
          {/* Accent line above */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto lg:ml-0 lg:mr-auto mb-2 rounded-full"></div>

          {/* Main title */}
          <h1 className="text-4xl md:text-5xl xl:text-4xl 2xl:text-5xl font-black uppercase tracking-wider relative">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">
                {title}
              </span>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent blur-sm opacity-50 -z-10">
              {title}
            </div>
          </h1>

          {/* Accent line below */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-secondary to-primary mx-auto xl:ml-0 xl:mr-auto mt-2 rounded-full opacity-80"></div>

          {/* Gaming-style decorative elements */}
          <div className="flex justify-center xl:justify-start items-center mt-1 space-x-3">
            <div className="w-6 h-0.5 bg-primary rounded-full opacity-60"></div>
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            <div className="w-6 h-0.5 bg-secondary rounded-full opacity-60"></div>
          </div>
        </div>

        {/* Description Section - Right */}
        <div className="flex items-center justify-center xl:justify-start xl:col-span-4">
          <div className="max-w-4xl xl:pr-6 px-4 xl:px-0">
            {/* Subtle accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>

            {/* Description text */}
            <p className="text-base-content text-sm md:text-base xl:text-sm 2xl:text-base leading-relaxed md:leading-snug font-light tracking-wide text-center xl:text-left">
              <span className="text-primary/80 font-medium">&ldquo;</span>
              {description}
              <span className="text-primary/80 font-medium">&rdquo;</span>
            </p>

            {/* Subtle bottom accent line */}
            <div className="w-12 h-0.5 bg-gradient-to-l from-secondary/30 to-transparent mt-3"></div>
          </div>
        </div>

        {/* Side accent elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden xl:block">
          <div className="w-0.5 h-12 bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
