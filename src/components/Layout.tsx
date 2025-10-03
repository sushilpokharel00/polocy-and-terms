import React from 'react';
import logo from '../485117.jpg';
import Logo from './Logo';

function Layout({ children }: { children?: any }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Top header removed per user request */}
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto w-full">{children}</div>
      </main>

      {/* Footer intentionally removed from layout */}
    </div>
  );
}

export default Layout;