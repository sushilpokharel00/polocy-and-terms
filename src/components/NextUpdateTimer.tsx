import React, { useEffect, useState } from 'react';

type Props = {
  days?: number;
};

export default function NextUpdateTimer({ days = 30 }: Props) {
  const [msLeft, setMsLeft] = useState(() => {
    try {
      const last = localStorage.getItem('lastPolicyUpdate');
      const start = last ? new Date(last).getTime() : Date.now();
      return Math.max(days * 24 * 3600 * 1000 - (Date.now() - start), 0);
    } catch {
      return days * 24 * 3600 * 1000;
    }
  });

  useEffect(() => {
    const id = setInterval(() => {
      try {
        const lastStr = localStorage.getItem('lastPolicyUpdate');
        const last = new Date(lastStr ? lastStr : Date.now()).getTime();
        const diff = Math.max(days * 24 * 3600 * 1000 - (Date.now() - last), 0);
        setMsLeft(diff);
        if (diff === 0) {
          localStorage.setItem('lastPolicyUpdate', new Date().toISOString());
          setMsLeft(days * 24 * 3600 * 1000);
        }
      } catch {
        setMsLeft(days * 24 * 3600 * 1000);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [days]);

  const d = Math.floor(msLeft / (24 * 3600 * 1000));
  const h = Math.floor((msLeft % (24 * 3600 * 1000)) / (3600 * 1000));
  const m = Math.floor((msLeft % (3600 * 1000)) / (60 * 1000));
  const s = Math.floor((msLeft % (60 * 1000)) / 1000);

  return (
    <div className="inline-flex items-center bg-indigo-50 text-indigo-700 mt-3 px-3 py-1 rounded-full text-sm">
      Next update in: <span className="ml-2 font-mono">{d}d {h}h {m}m {s}s</span>
    </div>
  );
}
