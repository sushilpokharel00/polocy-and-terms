import React from 'react';
import Layout from '../components/Layout';

function PrivacyPolicy() {
    return (
        <Layout>
            <div className="bg-white shadow rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

                <p className="text-sm text-gray-600 mb-6">Effective date: {new Date().toLocaleDateString()}</p>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                    <p className="text-gray-700">This Privacy Policy describes how personal information is collected, used, and disclosed by Sushil Pokharel when you use our website and services.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Information you provide directly: name, email address, messages via contact forms.</li>
                        <li>Usage information: pages visited, timestamps, device and browser information.</li>
                        <li>Cookies and similar tracking technologies for analytics and preferences.</li>
                    </ul>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">3. How We Use Information</h2>
                    <p className="text-gray-700">We use personal information to respond to inquiries, provide and improve services, detect abuse, and comply with legal obligations. We do not sell personal data.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">4. Sharing and Disclosure</h2>
                    <p className="text-gray-700">We may share information with service providers who perform services on our behalf, or when required by law. We take steps to ensure third parties process data in a manner consistent with this policy.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">5. Cookies and Tracking</h2>
                    <p className="text-gray-700">You can control cookies via your browser settings. Disabling cookies may limit some functionality.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">6. Data Security and Retention</h2>
                    <p className="text-gray-700">We implement reasonable technical and organizational measures to protect personal data. We retain data only as long as necessary to fulfill the purposes described or as required by law.</p>
                </section>

                <section className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
                    <p className="text-gray-700">Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:support@sushilpokharel00.com.np" className="underline text-indigo-600">support@sushilpokharel00.com.np</a>.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">8. Changes to this Policy</h2>
                    <p className="text-gray-700">We may update this Privacy Policy periodically. We will post the updated policy with an effective date on this page.</p>
                </section>
            </div>
        </Layout>
    );
}

export default PrivacyPolicy;