const Footer = () => {
  return (
   <footer id="contact" className="bg-[#0b1119] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Business Info */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">
            AR Fabrications
          </h3>
          <p className="text-sm leading-relaxed">
            Premium steel gates, window grills, balcony railings and 
            structural fabrication services in Hindupur.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer transition">Home</li>
            <li className="hover:text-orange-400 cursor-pointer transition">Services</li>
            <li className="hover:text-orange-400 cursor-pointer transition">Gallery</li>
            <li className="hover:text-orange-400 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Info</h4>
          <p className="text-sm mb-2">📞 +91 93910 93490</p>
          <p className="text-sm mb-2">📍 Hindupur, Andhra Pradesh</p>
          <p className="text-sm">✉️ arfabrications@email.com</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AR Fabrications. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;