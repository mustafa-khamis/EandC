import { useId } from 'react'
import './Logo.css'

export function LogoMark({ size = 44 }) {
  const id = `ec${useId().replace(/[^\w-]/g, '')}`
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <clipPath id={`${id}clip`}>
          <circle cx="32" cy="32" r="29" />
        </clipPath>
        <linearGradient id={`${id}sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#173a2c" />
          <stop offset="1" stopColor="#0b1f17" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="none" stroke="#d4a24c" strokeWidth="1.5" />
      <g clipPath={`url(#${id}clip)`}>
        <rect width="64" height="64" fill={`url(#${id}sky)`} />
        <circle cx="32" cy="34" r="12" fill="#d4a24c" />
        <path d="M0 46 L14 32 L21 38 L32 24 L43 37 L50 31 L64 44 V64 H0 Z" fill="#f4ede0" />
        <path d="M32 24 L28.5 28.5 L31 28 L32 30 L33.5 28 L35.5 28.6 Z" fill="#0b1f17" opacity="0.25" />
        <path d="M0 50 C14 45 22 52 34 48 C46 44 54 50 64 47 V64 H0 Z" fill="#2f5d4a" />
        <path d="M0 56 C16 52 26 58 40 54 C50 51.5 58 55 64 54 V64 H0 Z" fill="#10291f" />
      </g>
    </svg>
  )
}

export default function Logo({ light = false }) {
  return (
    <a href="#top" className={`logo ${light ? 'logo--light' : ''}`} aria-label="E&C Tour and Safari, home">
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">
          E<span className="logo-amp">&amp;</span>C
        </span>
        <span className="logo-sub">Tour &amp; Safari</span>
      </span>
    </a>
  )
}
