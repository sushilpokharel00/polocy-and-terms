import React, { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(null);

  useEffect(() => {
    try {
      const v = localStorage.getItem('cookieConsent');
      if (!v) setVisible(true);
      else setAccepted(v === 'accepted');
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (val: 'accepted' | 'rejected') => {
    try { localStorage.setItem('cookieConsent', val); } catch {}
    setAccepted(val === 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-8 md:right-auto md:bottom-8 z-50">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row md:items-center gap-3">
        <div className="flex-1 text-sm text-gray-700">We use cookies to improve your experience. You can accept or reject non-essential cookies. Essential cookies are required for site functionality.</div>
        <div className="flex gap-2">
          <button aria-label="Reject cookies" onClick={() => choose('rejected')} className="px-3 py-2 rounded-md border text-gray-700 hover:bg-gray-50">Reject</button>
          <button aria-label="Accept cookies" onClick={() => choose('accepted')} className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Accept</button>
        </div>
      </div>
    </div>
  );
}
