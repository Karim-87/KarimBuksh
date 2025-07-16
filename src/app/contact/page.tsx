"use client";
import {
  Mail,
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Youtube,
  Globe,
  Send,
  Twitter,
} from "lucide-react";

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M168 32a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v113.38a24 24 0 1 1-16-22.62 8 8 0 1 0 5.34-15.1A40 40 0 1 0 152 160V96.6a80.63 80.63 0 0 0 32 6.4 8 8 0 0 0 8-8V64a8 8 0 0 0-8-8 24 24 0 0 1-24-24Zm32 77.75a64.6 64.6 0 0 1-32-10.24V76.36a40.27 40.27 0 0 0 24 7.64Z" />
  </svg>
);

const DiscordIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 0 0-5.487 0 12.67 12.67 0 0 0-.617-1.25.077.077 0 0 0-.078-.036c-1.67.285-3.305.798-4.884 1.514a.07.07 0 0 0-.032.027C.533 9.418-.32 14.397.099 19.32a.082.082 0 0 0 .031.056c2.053 1.507 4.034 2.422 5.992 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 0 1-.007-.127c.126-.094.252-.19.374-.288a.075.075 0 0 1 .079-.007c3.927 1.792 8.18 1.792 12.061 0a.075.075 0 0 1 .08.006c.122.098.248.194.375.289a.077.077 0 0 1-.006.127 12.29 12.29 0 0 1-1.874.89.076.076 0 0 0-.04.105 13.107 13.107 0 0 0 1.225 1.993.077.077 0 0 0 .085.028c1.958-.607 3.939-1.522 5.992-3.029a.077.077 0 0 0 .03-.056c.5-5.177-.838-10.121-3.549-14.924a.061.061 0 0 0-.03-.028ZM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.174 1.094 2.157 2.419 0 1.334-.955 2.419-2.157 2.419Zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.174 1.094 2.157 2.419 0 1.334-.948 2.419-2.157 2.419Z" />
  </svg>
);

import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="bg-gray-950 min-h-screen text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">Contact Me</h1>
          <p className="text-gray-300 mt-3 text-lg">Let’s connect and collaborate!</p>
        </div>

        {/* Contact Info & Form */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left - Social Links */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Connect with me</h2>
            <div className="space-y-4">
              <SocialLink icon={<Facebook />} name="Facebook" url="https://web.facebook.com/karim.gabol.18" />
              <SocialLink icon={<Instagram />} name="Instagram" url="https://www.instagram.com/karim.gabol.18/" />
              <SocialLink icon={<Github />} name="GitHub" url="https://github.com/Karim-87" />
              <SocialLink icon={<Linkedin />} name="LinkedIn" url="https://www.linkedin.com/in/karim-buksh-299017228/" />
              <SocialLink icon={<TikTokIcon />} name="TikTok" url="https://www.tiktok.com/@karim.gabol" />
              <SocialLink icon={<Twitter />} name="X (Twitter)" url="https://x.com/karimkbgabol" />
              <SocialLink icon={<DiscordIcon />} name="Discord" url="https://discord.com/channels/@me/1342466654222680085" />
              {/* Placeholder Links */}
              <SocialLink icon={<Youtube />} name="YouTube" url="#" />
              <SocialLink icon={<Globe />} name="Portfolio" url="#" />
              <SocialLink icon={<Mail />} name="Email" url="mailto:karimkbgabol@gmail.com" />
            </div>
          </div>

          {/* Right - Contact Form (optional) */}
          <div className="md:w-1/2">
            <form className="bg-gray-800 p-6 rounded-xl space-y-4 shadow-lg">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded-xl transition"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Component for individual social link
const SocialLink = ({ icon, name, url }: { icon: React.ReactNode; name: string; url: string }) => (
  <Link
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all"
  >
    <span className="bg-gray-700 p-2 rounded-full">{icon}</span>
    <span className="text-base font-medium">{name}</span>
  </Link>
);
