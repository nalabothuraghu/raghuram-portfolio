// src/components/Avatar.jsx

export default function Avatar() {
  // A simple SVG developer avatar in a blazer, with a laptop
  return (
    <svg viewBox="0 0 200 200" className="w-40 h-40 rounded-full shadow-xl bg-[#232249] p-2" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="170" rx="60" ry="20" fill="#212135" />
      {/* Blazer */}
      <rect x="60" y="120" width="80" height="40" rx="16" fill="#3a345b" />
      <polygon points="60,120 100,160 140,120" fill="#25213c" />
      {/* Shirt */}
      <rect x="90" y="120" width="20" height="25" rx="6" fill="#fff" />
      {/* Face */}
      <ellipse cx="100" cy="95" rx="28" ry="33" fill="#ffdbac" />
      {/* Hair */}
      <ellipse cx="100" cy="70" rx="26" ry="18" fill="#3b3b3b" />
      {/* Eyes */}
      <ellipse cx="90" cy="95" rx="4" ry="3" fill="#262626" />
      <ellipse cx="110" cy="95" rx="4" ry="3" fill="#262626" />
      {/* Glasses */}
      <ellipse cx="90" cy="95" rx="8" ry="4" fill="none" stroke="#404040" strokeWidth="2" />
      <ellipse cx="110" cy="95" rx="8" ry="4" fill="none" stroke="#404040" strokeWidth="2" />
      <rect x="97" y="95" width="6" height="2" fill="#404040" />
      {/* Smile */}
      <path d="M90 108 Q100 120 110 108" stroke="#b97b56" strokeWidth="2" fill="none" />
      {/* Laptop */}
      <rect x="70" y="140" width="60" height="14" rx="3" fill="#888" />
      <rect x="78" y="144" width="44" height="6" rx="1.5" fill="#ddd" />
      <rect x="85" y="149" width="30" height="2" rx="1" fill="#bbb" />
    </svg>
  );
}