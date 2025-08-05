"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#B1D8B7] text-[#2F5233]">
      <div className="container mx-auto px-6 py-8 flex flex-row justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/mouhamad_fruits"
            aria-label="Facebook"
            className="hover:text-gray-800"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@mouhamadfruits"
            aria-label="TikTok"
            className="hover:text-gray-800"
          >
            <FaTiktok />
          </a>
          <a
            href="https://wa.link/uds68d"
            aria-label="LinkedIn"
            className="hover:text-gray-800"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
