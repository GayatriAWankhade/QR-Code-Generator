import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../utils/emailService';

const HomeForm = () => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      url
    )}&size=200x200`;

    const payload = {
    name,
    email,
    phone,
    url,
    qrCodeURL,
  };

  console.log("Payload before sending email:", payload);
    try {
    await sendEmail({
      name,
      email,
      phone,
      url,
      qrCodeURL, // ✅ pass QR code URL
    });


    navigate('/result', {
      state: {
        url,
        qrCodeURL,
        name,
        phone,
        email,
      },
    });
  }
    catch (error) {
    alert('Email sending failed. Check console for errors.');
    console.error(error);
  }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl border border-gray-200"
      >
        <h1 className="text-3xl font-extrabold text-center mb-6 text-violet-600 animate-pulse">
          🚀 Generate Your QR Code
        </h1>

        <div className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">URL</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Your Phone Number"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-400 outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-pink-500 to-violet-600 hover:from-pink-600 hover:to-violet-700 text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          ✨ Generate QR Code
        </button>
      </form>
    </div>
  );
};

export default HomeForm;

// https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=https://example.com