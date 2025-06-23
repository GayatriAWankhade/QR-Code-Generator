import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const QRResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { qrCodeURL, url, name } = location.state || {};

  if (!qrCodeURL || !url) {
    navigate('/');
    return null;
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Main Card */}
      <div className="w-full max-w-2xl text-center px-4">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-violet-700 mb-2">
          🎉 Your QR Code is Ready
        </h1>
        <p className="text-sm text-gray-600 mb-4">
          <b>{name ? `${name}, scan your code below:` : 'Scan your QR code below:'}</b>
        </p>

        {/* QR Code */}
        <div className="inline-block bg-gray-100 p-4 rounded-xl shadow mb-4">
          <img
            src={qrCodeURL}
            alt="Generated QR Code"
            className="w-48 h-48 object-contain"
          />
        </div>

        {/* ONLY show original user-entered URL */}
        {/* <p className="text-xs text-gray-500 mb-6 break-all">{url}</p> */}

        {/* Full-width decorative image with slightly increased height */}
        <div className="w-full mb-8">
          <img
            src="/images/img2.jpg"
            alt="Decorative"
            className="w-full object-cover max-h-[240px] rounded-md shadow-md"
          />
        </div>

        {/* Button moved a bit below with margin */}
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-violet-700 transition-shadow shadow-md hover:shadow-lg"
        >
          🔁 Generate Another
        </button>
      </div>
    </div>
  );
};

export default QRResult;
