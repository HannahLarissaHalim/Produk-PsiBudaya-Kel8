export default function Bunny({ className = '' }) {
  return (
    <svg viewBox="0 0 200 250" className={className} role="img" aria-label="Kelinci">
      <g stroke="#667e69" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* telinga */}
        <ellipse cx="68" cy="52" rx="15" ry="46" fill="#fffdf5" transform="rotate(-10 68 52)" />
        <ellipse cx="132" cy="52" rx="15" ry="46" fill="#fffdf5" transform="rotate(10 132 52)" />
        <ellipse cx="68" cy="56" rx="7" ry="30" fill="#f2c6b4" stroke="none" transform="rotate(-10 68 56)" />
        <ellipse cx="132" cy="56" rx="7" ry="30" fill="#f2c6b4" stroke="none" transform="rotate(10 132 56)" />
        {/* badan (sweater hijau) */}
        <ellipse cx="100" cy="205" rx="46" ry="38" fill="#8fae8b" />
        <path d="M62 192 Q100 202 138 192" fill="none" stroke="#e0e59e" />
        <path d="M58 212 Q100 224 142 212" fill="none" stroke="#e0e59e" />
        {/* kepala */}
        <ellipse cx="100" cy="122" rx="54" ry="45" fill="#fffdf5" />
      </g>
      {/* wajah */}
      <circle cx="80" cy="118" r="4.5" fill="#4b565a" />
      <circle cx="120" cy="118" r="4.5" fill="#4b565a" />
      <circle cx="78.5" cy="116.5" r="1.4" fill="#fff" />
      <circle cx="118.5" cy="116.5" r="1.4" fill="#fff" />
      <ellipse cx="100" cy="129" rx="4.5" ry="3.2" fill="#d98f7a" />
      <path d="M93 136 Q100 143 107 136" fill="none" stroke="#4b565a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="66" cy="134" r="8" fill="#f2b8a2" opacity=".65" />
      <circle cx="134" cy="134" r="8" fill="#f2b8a2" opacity=".65" />
    </svg>
  )
}