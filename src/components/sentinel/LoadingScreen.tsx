'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`loading-screen ${!visible ? 'opacity-0 pointer-events-none' : ''}`} style={{ transition: 'opacity 0.5s ease' }}>
      <img
        src="/images/logo.jpg"
        alt=""
        className="w-16 h-16 rounded-full object-cover mb-4 border border-[rgba(34,211,238,0.2)]"
      />
      <div className="loading-text">BLACK STONE</div>
    </div>
  );
}
