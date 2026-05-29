//src/app/contact/constact.page.tsx
'use client';

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    //here the form to be sent to backend, or email service, for now just use console log
    console.log("Constact form submitted:", formData);
    setSubmitted(true);

    //reset form after submission
    setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    setTimeout(() => setSubmitted(false), 5000); //hide success message after 5 seconds
};

return (
    <div className="min-h-screen bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4">Get In Touch</h1>
        <p className="text-zinc-400 text-center mb-12">
          Have questions or want to collaborate? Send us a message.
        </p>

        {submitted && (
          <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-400 p-6 rounded-2xl mb-8 text-center">
            Thank you! Your message has been received.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500"
            required
          />
          
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({...formData, subject: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500"
            required
          />

          <textarea
            placeholder="Your Message"
            rows={8}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-emerald-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-4 rounded-2xl transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
