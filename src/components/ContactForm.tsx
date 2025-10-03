import React, { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  message: string;
};

function isValidEmail(email: string) {
  // simple email check
  return /\S+@\S+\.\S+/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null as string | null);
  const [error, setError] = useState(null as string | null);

  const endpoint = (process.env.REACT_APP_CONTACT_FORM_ENDPOINT || '').trim();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((f: any) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    if (!isValidEmail(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      if (endpoint) {
        // Post JSON to configured endpoint (e.g. Formspree or your server)
        const resp = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (resp.ok) {
          setSuccess('Message sent — thank you!');
          setForm({ name: '', email: '', message: '' });
        } else {
          const text = await resp.text();
          setError('Failed to send message: ' + (text || resp.statusText));
        }
      } else {
        // mailto fallback
  const to = 'support@sushilpokharel00.com.np';
        const subject = encodeURIComponent(`Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        setSuccess('Opened your mail client to send the message.');
      }
    } catch (err: any) {
      setError(err?.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      {success && <div className="p-3 bg-green-50 text-green-800 rounded">{success}</div>}
      {error && <div className="p-3 bg-red-50 text-red-800 rounded">{error}</div>}

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-2"
          placeholder="Your full name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-2"
          placeholder="your@email.com"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 p-2"
          placeholder="Write your message here"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={loading}
          className={`inline-flex items-center px-4 py-2 rounded-md text-white font-medium ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
  <small className="text-xs text-gray-500">Or email us: <a href="mailto:support@sushilpokharel00.com.np" className="underline">support@sushilpokharel00.com.np</a></small>
      </div>
    </form>
  );
}
