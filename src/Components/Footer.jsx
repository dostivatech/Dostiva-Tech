import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-6">
      <div className="absolute inset-0">
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
  </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-sm">

        <div>
          <h3 className="text-white font-bold mb-2">Dostiva Tech</h3>
          <p>Providing quality IT training and services in India.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Services</h4>
          <p>Web Development</p>
          <p>Mobile App Development</p>
          <p>Training Programs</p>
        </div>

        <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>

               <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91 9052926868
              </p>

               <p className="flex items-center gap-2">
                <FaEnvelope /> info@dostiva.com
              </p>

              <p className="flex items-center gap-2">
                  <FaMapMarkerAlt /> Anakapalli,Andhra Pradesh, India, 531002
              </p>
            </div>
      </div>
      <div className="text-center text-sm mt-6">
        © {new Date().getFullYear()} Dostiva Technologies. All rights reserved.
      </div>
    </footer>
  );
}
