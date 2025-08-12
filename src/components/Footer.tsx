import React from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHeartbeat,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 left-0 bg-background/80 backdrop-blur-md border-b border-border shadow-md z-50 text-white">
      {/* Main Footer */}
      <div className="max-w-full mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <div className="flex items-center mb-4">
            <FaHeartbeat className="text-4xl mr-2 text-red-400 drop-shadow-lg" />
            <h3 className="text-3xl font-extrabold tracking-wide">RedLove</h3>
          </div>
          <p className="mb-6 leading-relaxed">
            Connecting blood donors with recipients in need. Our mission is to
            ensure no one dies waiting for blood.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebook, href: "#" },
              { icon: FaTwitter, href: "#" },
              { icon: FaInstagram, href: "#" },
              { icon: FaYoutube, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="p-2 rounded-full bg-red-800 hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-red-700 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { label: "Donate Blood", href: "/donate" },
              { label: "Request Blood", href: "/request" },
              { label: "Blood Drives", href: "/campaigns" },
              { label: "Donor Eligibility", href: "/eligibility" },
              { label: "FAQs", href: "/faq" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="flex items-center hover:text-red-500 transition-colors duration-200"
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-red-700 pb-2">
            Contact Us
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start hover:text-red-500 transition-colors duration-200">
              <FaMapMarkerAlt className="mt-1 mr-3 text-red-400" />
              123 Blood Drive Ave, Lifesaver City, Healthland 12345
            </li>
            <li className="flex items-center hover:text-red-500 transition-colors duration-200">
              <FaPhone className="mr-3 text-red-400" />
              Emergency: 1-800-RED-LOVE (733-5683)
            </li>
            <li className="flex items-center hover:text-red-500 transition-colors duration-200">
              <FaEnvelope className="mr-3 text-red-400" />
              help@redlove.org
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-bold mb-4 border-b border-red-700 pb-2">
            Stay Updated
          </h3>
          <p className="mb-4">Subscribe for donation alerts and updates.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded bg-red-950 border border-red-700 text-white placeholder-red-400 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-white hover:text-red-600 font-bold py-2 px-4 rounded transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Blood Types */}
      <div className="py-6 border-t border-red-800">
        <div className="max-w-full mx-auto px-6">
          <h4 className="text-center font-bold text-lg mb-4">
            Blood Types We Need
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
              <div
                key={type}
                className="bg-red-800 border border-red-600 rounded-full w-12 h-12 flex items-center justify-center font-bold shadow-md hover:bg-white hover:text-red-600 transition-colors duration-200"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t bg-background/80 backdrop-blur-md border-b border-border shadow-md z-50 py-4">
        <div className="max-w-full mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-sm">
            © {new Date().getFullYear()} RedLove Blood Donation Network. All
            rights reserved.
          </div>
          <div className="flex space-x-4 text-sm">
            <Link
              href="/privacy"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/partners"
              className="hover:text-red-500 transition-colors duration-200"
            >
              Our Partners
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-red-700 text-center py-2 px-4">
        <p className="font-bold">
          <span className="animate-pulse">⚠️</span> EMERGENCY NEED: Type O-
          blood supply critically low. Please donate if eligible.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
