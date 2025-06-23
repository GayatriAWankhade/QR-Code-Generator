import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_sq24zwb';
const TEMPLATE_ID = 'template_eiljjf8';
const PUBLIC_KEY = '74sPIlXTrFX-LLzRt';

export const sendEmail = async ({ name, email, phone, url, qrCodeURL }) => {
  const payload = { name, email, phone, url, qrCodeURL };

  // ✅ Add this log to debug
  console.log("Sending to EmailJS:", payload);

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      payload,
      PUBLIC_KEY
    );
    console.log("Email sent:", result.text);
    return result;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
