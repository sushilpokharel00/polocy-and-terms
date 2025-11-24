import React from 'react';
import Layout from '../components/Layout';

function PrivacyPolicy() {
    return (
        <Layout>
            <div className="bg-white shadow rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

                <p className="text-sm text-gray-600 mb-6">Effective date: November 17, 2025</p>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Overview</h2>
                    <p className="text-gray-700">This Privacy Policy explains how Sushil Pokharel ("we", "us", "our") collects, uses, discloses, and protects personal information when you visit or interact with our website or services. We are committed to handling personal data responsibly and in accordance with applicable law.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Information you provide directly: name, email, and messages submitted via contact forms.</li>
                        <li>Usage information: pages viewed, timestamps, and technical details (device, browser).</li>
                        <li>Cookies and similar technologies for analytics and preferences.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">How We Use Information</h2>
                    <p className="text-gray-700">We use personal information to respond to inquiries, provide and improve services, personalize content, detect abuse, and comply with legal obligations. We do not sell personal data to third parties.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Sharing and Disclosure</h2>
                    <p className="text-gray-700">We may share data with service providers who process information on our behalf and when required by law. We require such providers to process data consistent with this Policy.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Data Security & Retention</h2>
                    <p className="text-gray-700">We implement reasonable technical and organizational measures to protect personal information. We retain data only as long as necessary to fulfill the purposes described or as required by law.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
                    <p className="text-gray-700">Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:support@sushilpokharel00.com.np" className="underline text-indigo-600">support@sushilpokharel00.com.np</a>. We will respond in accordance with applicable law.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">Changes to this Policy</h2>
                    <p className="text-gray-700">We may update this Privacy Policy periodically. We will post the updated policy with an updated effective date. Continued use after changes indicates acceptance of the updated Policy.</p>
                </section>
            </div>
        </Layout>
    );
}

export default PrivacyPolicy;