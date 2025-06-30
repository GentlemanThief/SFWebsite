"use client";

import { useEffect, useRef } from "react";

export default function TwitterTimeline() {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    const loadTwitterWidget = () => {
      // Remove any existing script to avoid duplicates
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and load the script
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      
      script.onload = () => {
        scriptLoadedRef.current = true;
        // Force Twitter to process widgets
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(containerRef.current);
        }
      };

      script.onerror = () => {
        console.error("Failed to load Twitter widgets script");
      };

      document.head.appendChild(script);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      loadTwitterWidget();
    }, 100);

    return () => {
      clearTimeout(timer);
      // Clean up script on unmount
      const script = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="w-full py-8 bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-base-content">
          Follow Our Latest Updates
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-lg" ref={containerRef}>
            <a
              className="twitter-timeline"
              data-height="600"
              data-theme="dark"
              data-chrome="noheader nofooter noborders"
              href="https://twitter.com/teamstrike1st?ref_src=twsrc%5Etfw"
            >
              Tweets by teamstrike1st
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
