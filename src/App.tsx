import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactForm from './components/ContactForm';
import CookieBanner from './components/CookieBanner';
import { Outlet } from 'react-router-dom';
import Logo from './components/Logo';

/* Countdown Hook */
function useCountdown(days = 30) {
  const [msLeft, setMsLeft] = useState(() => {
    try {
      const last = localStorage.getItem("lastPolicyUpdate");
      const start = last ? new Date(last).getTime() : Date.now();
      return Math.max(days * 24 * 3600 * 1000 - (Date.now() - start), 0);
    } catch {
      return days * 24 * 3600 * 1000;
    }
  });

  useEffect(() => {
    if (!localStorage.getItem("lastPolicyUpdate")) {
      localStorage.setItem("lastPolicyUpdate", new Date().toISOString());
    }
    const id = setInterval(() => {
      const lastStr = localStorage.getItem("lastPolicyUpdate");
      const last = new Date(lastStr ? lastStr : Date.now()).getTime();
      const diff = Math.max(days * 24 * 3600 * 1000 - (Date.now() - last), 0);
      setMsLeft(diff);
      if (diff === 0) {
        localStorage.setItem("lastPolicyUpdate", new Date().toISOString());
        setMsLeft(days * 24 * 3600 * 1000);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [days]);

  const d = Math.floor(msLeft / (24 * 3600 * 1000));
  const h = Math.floor((msLeft % (24 * 3600 * 1000)) / (3600 * 1000));
  const m = Math.floor((msLeft % (3600 * 1000)) / (60 * 1000));
  const s = Math.floor((msLeft % (60 * 1000)) / 1000);
  return `${d}d ${h}h ${m}m ${s}s`;
}

/* Accordion Section */
// Lightweight types to avoid depending on @types/react being installed.
type AnyNode = any;
type AnyRef = { current: any } | null;
type AccordionSectionProps = {
  id: string;
  title: AnyNode;
  open: boolean;
  onToggle: () => void;
  children?: AnyNode;
  innerRef?: AnyRef;
};

function AccordionSection({ id, title, open, onToggle, children, innerRef }: AccordionSectionProps) {
  return (
    <div id={id} className="mb-6 border-b border-gray-200" ref={innerRef}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`section-${id}`}
        className="w-full flex justify-between items-center py-5 text-lg font-semibold text-gray-800 hover:text-indigo-600 focus:outline-none"
      >
        <span className="text-lg">{title}</span>
        <span className={`text-sm transform transition-transform ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>
      <div
        id={`section-${id}`}
        className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="py-2 text-gray-600">{children}</div>
      </div>
    </div>
  );
}

function App() {
  const refs = {
    intro: useRef(null),
    terms: useRef(null),
    privacy: useRef(null),
    security: useRef(null),
    cookies: useRef(null),
    updates: useRef(null),
    rights: useRef(null),
    contact: useRef(null),
  } as Record<string, AnyRef>;

  const [open, setOpen] = useState("intro");
  const [agreed, setAgreed] = useState(() => {
    try {
      return localStorage.getItem("termsAgreed") === "true";
    } catch {
      return false;
    }
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const countdown = useCountdown(30);

  const sections = [
    { id: "intro", label: "Introduction" },
    { id: "terms", label: "Terms of Use" },
    { id: "privacy", label: "Privacy Policy" },
    { id: "security", label: "Data Security" },
    { id: "cookies", label: "Cookies" },
    { id: "updates", label: "Updates" },
    { id: "rights", label: "User Rights" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    localStorage.setItem("termsAgreed", agreed ? "true" : "false");
  }, [agreed]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(id);
    setSidebarOpen(false);
    refs[id]?.current?.scrollIntoView?.({ behavior: "smooth", block: "start" });
  };

  return (
      <Layout>
        <CookieBanner />
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
          {/* Top nav and left sidebar removed per user request */}
          <main className="flex-1">
            <section className="max-w-3xl mx-auto p-8 pb-16">
              <Outlet />
            </section>
          </main>

          {/* Floating back-to-top button */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed right-6 bottom-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none">
            ↑
          </button>

          {/* Footer intentionally removed */}
        </div>
      </Layout>
  );
};

export default App;