import { Link } from "react-router-dom";

import {
  send,
  qr,
  google,
  apple,
  insta,
  facebook,
  linkin,
  twitter,
  copyright,
} from "../assets/icons";

const SOCIAL_LINKS = [
  { icon: facebook, url: "https://facebook.com", label: "Facebook" },
  { icon: twitter, url: "https://twitter.com", label: "Twitter" },
  { icon: insta, url: "https://instagram.com", label: "Instagram" },
  { icon: linkin, url: "https://linkedin.com", label: "LinkedIn" },
];

const APP_LINKS = [
  { icon: google, url: "https://play.google.com", label: "Google Play" },
  { icon: apple, url: "https://www.apple.com/app-store/", label: "App Store" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          <ul className="space-y-4">
            <li>
              <h2 className="text-white text-lg font-semibold">Exclusive</h2>
            </li>
            <li>
              <Link to="/subscribe" className="hover:text-white">
                Subscribe
              </Link>
            </li>
            <li className="text-sm">
              Get 10% off your first order
            </li>
            <li>
              <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent px-3 py-2 text-sm outline-none w-full"
                />
                <button className="px-3">
                  <img src={send} alt="Send" className="w-4 h-4" />
                </button>
              </div>
            </li>
          </ul>
          <ul className="space-y-4 text-sm">
            <li>
              <h2 className="text-white text-lg font-semibold">Support</h2>
            </li>
            <li>
              111 Bijoy sarani, Dhaka,
              <br />
              DH-1515, Bangladesh.
            </li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
          <ul className="space-y-3 text-sm">
            <li>
              <h2 className="text-white text-lg font-semibold">Account</h2>
            </li>
            <li><Link to="/account" className="hover:text-white">My Account</Link></li>
            <li><Link to="/login" className="hover:text-white">Login / Register</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
            <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
          </ul>
          <ul className="space-y-3 text-sm">
            <li>
              <h2 className="text-white text-lg font-semibold">Quick Link</h2>
            </li>
            <li><Link to="/privacypolicy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/termofuse" className="hover:text-white">Term Of Use</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
          <ul className="space-y-4 text-sm">
            <li>
              <h2 className="text-white text-lg font-semibold">Download App</h2>
            </li>
            <li>Save $3 with App New User Only</li>
            <li className="flex gap-4">
              <img src={qr} alt="QR Code" className="w-20 h-20" />
              <div className="flex flex-col gap-2">
                {APP_LINKS.map(({ icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={icon} alt={label} className="h-10" />
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-4 pt-2">
              {SOCIAL_LINKS.map(({ icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <img src={icon} alt={label} className="w-5 h-5" />
                </a>
              ))}
            </li>
          </ul>
        </div>
      </section>
      <section className="border-t border-gray-800 py-4">
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
          <img src={copyright} alt="Copyright" className="w-3 h-3" />
          <p>Copyright Rimel 2022. All rights reserved</p>
        </div>
      </section>
    </footer>
  );
}
// use array [{},{}] when multiple elements
// never put anything else than li inside ul
// provide a for external links and Link for internal pages