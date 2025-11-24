import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';

export default function ErrorPage() {
  const [count, setCount] = useState(7);

  useEffect(() => {
    const prevTitle = document.title;
    const prevLink = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    const prevHref = prevLink?.href || null;
    document.title = '404 - Page not found';
    let link = prevLink;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = '/favicon.svg';

    const id = setInterval(() => {
      setCount((c: number) => {
        if (c <= 1) {
          window.location.href = '/';
          return 0;
        }
        return c - 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
      document.title = prevTitle;
      if (prevLink && prevHref) prevLink.href = prevHref;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md p-8 text-center flex flex-col">
        <header className="mx-auto w-16 h-16 mb-4">
          <Logo size={64} />
        </header>

        <main className="flex-1">
          <h1 className="text-3xl font-bold mb-2">404 — Page Not Found</h1>
          <p className="text-gray-600 mb-4">We couldn't find the page you requested. It may have been moved, renamed, or removed.</p>
          <p className="text-sm text-gray-500 mb-6">You'll be redirected to the homepage in <strong>{count}s</strong>. Alternatively, use one of the quick links below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/" className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">Go home</a>
            <a href="/#terms" className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">Terms</a>
            <a href="/#privacy" className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">Privacy</a>
            <a href="mailto:support@sushilpokharel00.com.np" className="px-4 py-2 border border-gray-200 rounded-md hover:bg-gray-50">Contact support</a>
          </div>
        </main>

        {/* Footer intentionally removed from error page */}
      </div>
    </div>
  );
}
