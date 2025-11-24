import React, { useEffect, useRef, useState } from 'react';
import ContactForm from '../components/ContactForm';
import NextUpdateTimer from '../components/NextUpdateTimer';

function Home() {
    const refs = {
        intro: useRef(null),
        terms: useRef(null),
        privacy: useRef(null),
        security: useRef(null),
        cookies: useRef(null),
        updates: useRef(null),
        rights: useRef(null),
        contact: useRef(null),
    } as Record<string, any>;

    const [open, setOpen] = useState('intro');
    const [agreed, setAgreed] = useState(() => {
        try {
            return localStorage.getItem('termsAgreed') === 'true';
        } catch {
            return false;
        }
    });

    useEffect(() => {
        localStorage.setItem('termsAgreed', agreed ? 'true' : 'false');
    }, [agreed]);

    return (
        <div>
            <header className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-2">📜 Terms of Service & Privacy Policy</h1>
                <p className="text-sm text-gray-500 mt-2">Last updated: {new Date(localStorage.getItem('lastPolicyUpdate') || new Date('2025-11-17')).toLocaleDateString()}</p>
                <NextUpdateTimer days={30} />
            </header>

            <div>
                <section id="intro" ref={refs.intro} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">Introduction</h2>
                    <p className="text-gray-600">We value transparency and your rights. This page explains how we protect and use data and what rules apply when using the site.</p>
                </section>

                <section id="terms" ref={refs.terms} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">Terms of Use</h2>
                    <ul className="list-disc ml-6 space-y-1 text-gray-600">
                        <li>Provide accurate information and keep credentials private.</li>
                        <li>Do not attempt unauthorized access or abuse services.</li>
                        <li>We may suspend or terminate accounts for violations.</li>
                    </ul>
                </section>

                <section id="privacy" ref={refs.privacy} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">Privacy Policy</h2>
                    <ul className="list-disc ml-6 space-y-1 text-gray-600">
                        <li>We collect data you provide and usage data to improve the service.</li>
                        <li>Data is used for personalization, support, and legal compliance.</li>
                        <li>We do not sell personal data; third-party sharing is limited to required cases.</li>
                    </ul>
                </section>

                <section id="security" ref={refs.security} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">Data Security</h2>
                    <ul className="list-disc ml-6 space-y-1 text-gray-600">
                        <li>Transmission protected by SSL/TLS.</li>
                        <li>Access controls and industry-standard safeguards are applied.</li>
                        <li>Only authorized staff can access personal data.</li>
                    </ul>
                </section>

                <section id="cookies" ref={refs.cookies} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">Cookies</h2>
                    <p className="text-gray-600">Cookies store small pieces of data to remember preferences and sessions. You can disable them in your browser, but some features may not work.</p>
                </section>

                <section id="updates" ref={refs.updates} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">Updates</h2>
                    <p className="text-gray-600">Terms may be updated monthly. Continued use after updates indicates acceptance. The next scheduled update is shown on the main page.</p>
                </section>

                <section id="rights" ref={refs.rights} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">User Rights</h2>
                    <ul className="list-disc ml-6 space-y-1 text-gray-600">
                        <li>Access, correct, or request deletion of your personal data.</li>
                        <li>Contact support to exercise your rights.</li>
                    </ul>
                </section>

                <section id="contact" ref={refs.contact} className="mb-6 border-b border-gray-200">
                    <h2 className="text-xl font-semibold py-3">Contact</h2>
                    <ContactForm />
                </section>
            </div>

        </div>
    );
}

export default Home;