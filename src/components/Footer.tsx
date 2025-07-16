"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Github,
  Linkedin,
  Mail,
  Youtube,
  Twitter,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-yellow-400">Karim Buksh</h2>
          <p className="text-sm text-gray-400">Frontend Developer | Educator | Creator</p>
          <p className="text-sm text-gray-400 mt-1">📩 karimkbgabol@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 flex-wrap justify-center">
          <FooterLink icon={<Facebook />} url="https://web.facebook.com/karim.gabol.18" />
          <FooterLink icon={<Instagram />} url="https://www.instagram.com/karim.gabol.18/" />
          <FooterLink icon={<Github />} url="https://github.com/Karim-87" />
          <FooterLink icon={<Linkedin />} url="https://www.linkedin.com/in/karim-buksh-299017228/" />
          <FooterLink icon={<Twitter />} url="https://x.com/karimkbgabol" />
          <FooterLink icon={<Youtube />} url="#" />
          <FooterLink icon={<Globe />} url="#" title="Portfolio (Coming Soon)" />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-6 text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Karim Buksh. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLink({ icon, url, title }: { icon: React.ReactNode; url: string; title?: string }) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="p-2 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
    >
      {icon}
    </Link>
  );
}
