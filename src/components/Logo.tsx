import React from 'react';

export default function Logo({ size = 40 }: { size?: number }) {
  const s = typeof size === 'number' ? `${size}px` : size;
  return (
    <div style={{ width: s, height: s }} className="inline-block" aria-hidden={false}>
      <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sushil Pokharel logo">
        <title>Sushil Pokharel</title>
        <rect width="48" height="48" rx="8" fill="#4F46E5" />
        <path d="M14 32c0-6 6-10 10-10s10 4 10 10" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 22c2-2 4-3 6-3s4 1 6 3" stroke="#C7D2FE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
