
import React from 'react';
import Layout from '../components/Layout';

function TermsOfService() {
    return (
        <Layout>
            <div className="bg-white shadow rounded-lg p-8">
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

                <p className="text-sm text-gray-600 mb-6">Effective date: November 17, 2025</p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">1. Agreement</h2>
                    <p className="text-gray-700 leading-relaxed">These Terms of Service ("Terms") govern your access to and use of the website and services provided by Sushil Pokharel ("we", "us", "our"). By accessing or using our services, you agree to these Terms. If you do not agree, please discontinue use.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">2. Permitted Use</h2>
                    <p className="text-gray-700 leading-relaxed">You agree to use the services lawfully and not to engage in activity that harms the service, other users, or third parties. Prohibited conduct includes unauthorized access, distribution of malicious software, harassment, and interference with normal operation.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
                    <p className="text-gray-700 leading-relaxed">All content and materials on the site are owned by or licensed to us and are protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works without our prior written permission.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">4. Disclaimers & Limitation of Liability</h2>
                    <p className="text-gray-700 leading-relaxed">The services are provided "as is". To the extent permitted by law, we disclaim all warranties and limit liability for damages arising out of or related to your use of the services. Where exclusions are not permitted by applicable law, liability is limited to the maximum extent permitted.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">5. Changes to These Terms</h2>
                    <p className="text-gray-700 leading-relaxed">We may update these Terms periodically. Material changes will be posted with a new effective date. Continued use after a change constitutes acceptance of the updated Terms.</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">6. Governing Law</h2>
                    <p className="text-gray-700 leading-relaxed">These Terms are governed by the laws applicable to our operations. For specific legal questions, seek independent legal advice in your jurisdiction.</p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
                    <p className="text-gray-700 leading-relaxed">If you have questions about these Terms, contact us at <a href="mailto:support@sushilpokharel00.com.np" className="underline text-indigo-600">support@sushilpokharel00.com.np</a>.</p>
                </section>
            </div>
        </Layout>
    );
}

export default TermsOfService;