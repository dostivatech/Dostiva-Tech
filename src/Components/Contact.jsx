import { useLocation } from "react-router-dom";
import { useState } from "react";
import { sendContact } from "../api/contactApi"

export default function Contact() {
  const { state } = useLocation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await sendContact({
      name,
      email,
      message,
      phone,
      app: "dostiva-tech",
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } else {
      alert("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-600 mb-4">Ready to grow with us? Let’s talk.</p>
          <p>Email: info@dostiva.com</p>
          <p>Phone: +91 9192849769</p>

          {state?.course && (
            <p className="mt-4 text-slate-600">
              You are interested in:{" "}
              <span className="font-semibold text-brand-orange">
                {state.course}
              </span>
            </p>
          )}
        </div>

        <form  
          onSubmit={handleSubmit}
          className="relative z-20 bg-slate-50 p-6 rounded-xl grid gap-4"
        >
          <input
            className="border p-3 rounded"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="border p-3 rounded"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="border p-3 rounded"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            className="border p-3 rounded"
            placeholder="Your Message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button
            type="submit"
            className="bg-brand-orange text-white py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
