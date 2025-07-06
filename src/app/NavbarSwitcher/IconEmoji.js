// This component ensures emoji icons render with consistent sizing and avoids FOUC/hydration issues.
'use client';
import React from 'react';

export default function IconEmoji({ children, className = '' }) {
  // Render emoji as span with explicit font and sizing for SSR/CSR consistency
  return (
    <span
      className={`inline-block align-middle select-none leading-none font-normal not-italic text-base md:text-lg transition-all duration-300 ${className}`}
      style={{ fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif', lineHeight: 1 }}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
