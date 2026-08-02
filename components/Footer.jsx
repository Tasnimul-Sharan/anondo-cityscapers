"use client";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinBold } from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";

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
            className="mb-4"
          />
          <p className="text-base leading-relaxed mb-6">
            Luxury living redefined.{" "}
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <SocialIcon
              icon={<FaFacebookF />}
              href="https://www.facebook.com/anondo.cityscapers.ltd/"
            />
            <SocialIcon
              icon={<FaLinkedinIn />}
              href="https://www.linkedin.com/company/anondo-cityscapers-ltd/"
            />
            <SocialIcon
              icon={<FaInstagram />}
              href="https://www.instagram.com/anondo_cityscapers/"
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
              { name: "FAQ", href: "/faq" },
              { name: "Documents", href: "/documents" },
              { name: "Blogs", href: "/blogs" },
              { name: "Terms and Conditions", href: "/terms-and-conditions" },
              { name: "Privacy Policy", href: "/privacy-policy" },
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
              // {
              //   name: "Anondo Rosemont Estate",
              //   link: "/anondo-rosemont-estate",
              // },
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

// "use client";

// import {
//   FaFacebookF,
//   FaLinkedinIn,
//   FaInstagram,
//   FaYoutube,
//   FaArrowRight,
// } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { FiPhoneCall } from "react-icons/fi";
// import { PiMapPinBold } from "react-icons/pi";
// import Image from "next/image";
// import Link from "next/link";

// const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
//   { name: "Blogs", href: "/blogs" },
//   { name: "Terms and Conditions", href: "/terms-and-conditions" },
//   { name: "Privacy Policy", href: "/privacy-policy" },
// ];

// const projects = [
//   { name: "Anondo Bhubon", href: "/anondo-bhubon" },
//   { name: "Anondo Parkcity", href: "/anondo-parkcity" },
// ];

// const socials = [
//   {
//     icon: <FaFacebookF />,
//     href: "https://www.facebook.com/anondo.cityscapers.ltd/",
//     label: "Facebook",
//   },
//   {
//     icon: <FaLinkedinIn />,
//     href: "https://www.linkedin.com/company/anondo-cityscapers-ltd/",
//     label: "LinkedIn",
//   },
//   {
//     icon: <FaInstagram />,
//     href: "https://www.instagram.com/anondo_cityscapers/",
//     label: "Instagram",
//   },
//   {
//     icon: <FaYoutube />,
//     href: "https://youtube.com/@AnondoHousingSocietyOfficial",
//     label: "YouTube",
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[#07111f] text-white">
//       {/* Top CTA Panel */}
//       <div className="mx-auto max-w-7xl px-6 pt-16">
//         <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-6 text-gray-900 shadow-2xl sm:p-8 lg:p-10">
//           <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
//             <div>
//               <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
//                 Stay Connected
//               </p>

//               <h3 className="text-3xl font-bold tracking-[-0.03em] text-gray-950 md:text-4xl">
//                 Get project updates and latest news from Anondo Cityscapers.
//               </h3>

//               <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
//                 Subscribe to receive project information, real estate insights,
//                 and important announcements directly in your inbox.
//               </p>
//             </div>

//             <form className="rounded-2xl border border-gray-200 bg-gray-50 p-2">
//               <div className="flex flex-col gap-3 sm:flex-row">
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   className="min-h-14 flex-1 rounded-xl bg-white px-5 text-sm text-gray-900 outline-none ring-1 ring-gray-200 transition focus:ring-primary"
//                 />

//                 <button
//                   type="submit"
//                   className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-secondary"
//                 >
//                   Subscribe
//                   <HiOutlineMail />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Contact Strip */}
//       <div className="mx-auto max-w-7xl px-6 pt-10">
//         <div className="grid gap-4 md:grid-cols-3">
//           <ContactBox
//             icon={<PiMapPinBold />}
//             label="Office Address"
//             text="Printers Building, 11–12th Floor, 5 Rajuk Avenue, Motijheel, Dhaka"
//           />

//           <ContactBox
//             icon={<FiPhoneCall />}
//             label="Call Us"
//             text="+880 1313-775333"
//             href="tel:+8801313775333"
//           />

//           <ContactBox
//             icon={<HiOutlineMail />}
//             label="Email Us"
//             text="info@anondocityscapers.com"
//             href="mailto:info@anondocityscapers.com"
//           />
//         </div>
//       </div>

//       {/* Main Footer */}
//       <div className="mx-auto max-w-7xl px-6 py-12">
//         <div className="grid gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr]">
//           {/* Brand */}
//           <div>
//             <Link href="/" className="inline-flex">
//               <Image
//                 src="/cityscapers.png"
//                 alt="Anondo Cityscapers Logo"
//                 width={220}
//                 height={120}
//                 className="h-20 w-auto object-contain"
//               />
//             </Link>

//             <p className="mt-5 max-w-sm text-sm leading-8 text-white/65">
//               Luxury living redefined through sustainable communities, modern
//               planning, and future-ready real estate development.
//             </p>

//             <div className="mt-6 flex items-center gap-3">
//               {socials.map((item) => (
//                 <SocialIcon key={item.label} {...item} />
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <FooterColumn title="Quick Links">
//             <ul className="space-y-3">
//               {quickLinks.map((item) => (
//                 <FooterLink key={item.name} href={item.href}>
//                   {item.name}
//                 </FooterLink>
//               ))}
//             </ul>
//           </FooterColumn>

//           {/* Projects */}
//           <FooterColumn title="Projects">
//             <ul className="space-y-3">
//               {projects.map((item) => (
//                 <FooterLink key={item.name} href={item.href}>
//                   {item.name}
//                 </FooterLink>
//               ))}
//             </ul>
//           </FooterColumn>

//           {/* Company Note */}
//           <div>
//             <h4 className="mb-6 text-lg font-bold text-white">
//               Anondo Cityscapers
//             </h4>

//             <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
//               <p className="text-sm leading-8 text-white/65">
//                 We focus on planned communities, sustainable living, transparent
//                 project communication, and long-term real estate value.
//               </p>

//               <Link
//                 href="/about"
//                 className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-white"
//               >
//                 Learn More
//                 <FaArrowRight className="text-xs" />
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="flex flex-col gap-4 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
//           <p>
//             Copyright © {new Date().getFullYear()}{" "}
//             <span className="font-semibold text-white">
//               Anondo Cityscapers Ltd.
//             </span>{" "}
//             All rights reserved.
//           </p>

//           <div className="flex flex-wrap gap-5">
//             <Link
//               href="/terms-and-conditions"
//               className="transition hover:text-primary"
//             >
//               Terms
//             </Link>

//             <Link
//               href="/privacy-policy"
//               className="transition hover:text-primary"
//             >
//               Privacy
//             </Link>

//             <Link href="/contact" className="transition hover:text-primary">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// function ContactBox({ icon, label, text, href }) {
//   const content = (
//     <div className="group flex h-full items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-primary/40 hover:bg-white/10">
//       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-xl text-white">
//         {icon}
//       </div>

//       <div>
//         <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
//           {label}
//         </p>

//         <p className="mt-2 text-sm font-medium leading-7 text-white/75 transition group-hover:text-white">
//           {text}
//         </p>
//       </div>
//     </div>
//   );

//   return href ? (
//     <Link href={href} className="block h-full">
//       {content}
//     </Link>
//   ) : (
//     content
//   );
// }

// function FooterColumn({ title, children }) {
//   return (
//     <div>
//       <h4 className="mb-6 text-lg font-bold text-white">{title}</h4>
//       {children}
//     </div>
//   );
// }

// function FooterLink({ href, children }) {
//   return (
//     <li className="group w-fit">
//       <Link
//         href={href}
//         className="inline-flex items-center gap-2 text-sm font-medium text-white/65 transition hover:text-primary"
//       >
//         <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-60 transition group-hover:w-4" />
//         {children}
//       </Link>
//     </li>
//   );
// }

// function SocialIcon({ icon, href, label }) {
//   return (
//     <Link
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label={label}
//       className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-primary hover:bg-primary"
//     >
//       {icon}
//     </Link>
//   );
// }
