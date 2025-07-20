import dynamic from "next/dynamic";
const FadeIn = dynamic(() => import("./FadeIn"), { ssr: false });

export default function TitleHeader({ title }) {
  return (
    <div className="relative py-5 px-6 bg-base-100">
      {/* Subtle background accent elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent"></div>
      
      {/* Main title container */}
      <div className="relative flex justify-center items-center">
        <div className="text-center">
          {/* Accent line above */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mb-3 rounded-full"></div>
          
          {/* Main title */}
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider relative">
            <FadeIn>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-2xl">
                {title}
              </span>
            </FadeIn>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent blur-sm opacity-50 -z-10">
              {title}
            </div>
          </h1>
          
          {/* Accent line below */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-secondary to-primary mx-auto mt-3 rounded-full opacity-80"></div>
          
          {/* Gaming-style decorative elements */}
          <div className="flex justify-center items-center mt-2 space-x-3">
            <div className="w-6 h-0.5 bg-primary rounded-full opacity-60"></div>
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
            <div className="w-6 h-0.5 bg-secondary rounded-full opacity-60"></div>
          </div>
        </div>
        
        {/* Side accent elements */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="w-0.5 h-12 bg-gradient-to-b from-secondary to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}