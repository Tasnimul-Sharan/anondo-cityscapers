"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-6">
      <div className="custom-container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Image
            src="/cityscapers.png"
            alt="Logo"
            width={200}
            height={180}
            className="mb-6"
          />
          <p className="text-sm leading-relaxed mb-6">
            Anondo Housing Society is a project of Anondo Family Welfare
            Multipurpose Co-operative Society, located in Purbachal new town.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <SocialIcon
              icon={<FaFacebookF />}
              href="https://www.facebook.com/AnondoHousing"
            />
            <SocialIcon
              icon={<FaXTwitter />}
              href="https://twitter.com/AnondoPolice"
            />
            <SocialIcon
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/company/anondo-housing-society"
            />
            <SocialIcon
              icon={<FaYoutube />}
              href="https://www.youtube.com/@AnondoHousingSocietyOfficial"
            />
            <SocialIcon
              icon={<FaInstagram />}
              href="https://www.instagram.com/aphs_bd/"
            />
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Quick Links
            <span className="block w-12 h-[3px] bg-primary mt-1"></span>
          </h4>

          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Project", href: "/project" },
              { name: "Terms and Conditions", href: "/terms-and-conditions" },
            ].map((item, i) => (
              <li key={i} className="relative group w-fit">
                <Link href={item.href}>
                  <span className="cursor-pointer transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                  </span>

                  {/* Underline Animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Projects
            <span className="block w-12 h-[3px] bg-primary mt-1"></span>
          </h4>

          <ul className="space-y-3 text-sm">
            {[
              { name: "Anondo Bhubon", link: "/anondo-bhubon" },
              { name: "Anondo Parkcity", link: "/anondo-parkcity" },
              {
                name: "Anondo Rosemont Estate",
                link: "/anondo-rosemont-estate",
              },
            ].map((item, i) => (
              <li key={i} className="relative group w-fit">
                <Link href={item.link}>
                  <span className="transition-colors duration-300 group-hover:text-primary">
                    {item.name}
                  </span>

                  {/* Underline Animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4 relative inline-block">
            Get in Touch
            <span className="block w-12 h-[3px] bg-primary mt-1"></span>
          </h4>
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <PiMapPinBold size={30} className="text-primary" />
              Printers Building, 11–12th Floor, 5 Rajuk Avenue, Motijheel, 1000
              Dhaka
            </p>

            <p className="flex items-center gap-3">
              <FiPhoneCall size={20} className="text-primary" />
              +880 1313-775333
            </p>

            <p className="flex items-center gap-3">
              <HiOutlineMail size={20} className="text-primary" />
              info@anondocityscapers.com
            </p>
          </div>
          <p className="text-sm leading-relaxed my-4">
            Enter your email and receive the latest news from us.
          </p>
          {/* Email Input */}
          <div className="flex items-center border border-white/40 rounded-md overflow-hidden mb-6">
            <input
              type="email"
              placeholder="email@example.com"
              className="px-4 py-2 w-full bg-transparent outline-none placeholder-white/80 text-sm"
            />
            <button className="px-4 transition-colors">
              <HiOutlineMail />
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-sm">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-primary">
          Anondo Cityscapers Ltd
        </span>
        . All rights reserved.
      </div>
    </footer>
  );
}

/* Small Reusable Icon Component */
function SocialIcon({ icon, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-primary hover:border-transparent transition-all duration-500"
    >
      {icon}
    </Link>
  );
}
