"use client";

import React from "react";
import Link from "next/link";

interface FooterProps {
  settings: Record<string, string>;
}

export default function Footer({
  settings,
}: FooterProps) {

  return (
    <footer className="
      bg-[#0f172a]
      text-gray-400
      py-16
      mt-20
    ">

      <div className="
        container mx-auto px-4
        grid grid-cols-1
        md:grid-cols-4
        gap-12
      ">

        {/* CUSTOMER CARE */}
        <div>

          <h3 className="
            text-white
            font-black text-lg
            mb-6
            tracking-tight
            uppercase
            border-l-4
            pl-4
          "
          style={{
            borderColor:
              "var(--footer-action)",
          }}
          >
            Customer Care
          </h3>

          <ul className="
            space-y-3
            text-[13px]
          ">

            {[
              "Help Center",
              "How to Buy",
              "Corporate & Bulk Purchasing",
              "Returns & Refunds",
              "Contact Us",
            ].map((item) => (

              <li key={item}>

                <Link
                  href="#"
                  className="
                    transition-colors
                  "
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "var(--footer-action)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "";
                  }}
                >
                  {item}
                </Link>

              </li>

            ))}

          </ul>

        </div>

        {/* AFFILIATESHOP */}
        <div>

          <h3
            className="
              text-white
              font-black text-lg
              mb-6
              tracking-tight
              uppercase
              border-l-4
              pl-4
            "
            style={{
              borderColor:
                "var(--footer-action)",
            }}
          >
            AffiliateShop
          </h3>

          <ul className="
            space-y-3
            text-[13px]
          ">

            {[
              {
                label: "About Us",
                href: "#",
              },
              {
                label: "Careers",
                href: "#",
              },
              {
                label: "Affiliate Disclosure",
                href: "/affiliate-disclosure",
              },
              {
                label: "Privacy Policy",
                href: "#",
              },
              {
                label: "Digital Payments",
                href: "#",
              },
            ].map((item) => (

              <li key={item.label}>

                <Link
                  href={item.href}
                  className="
                    transition-colors
                  "
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color =
                      "var(--footer-action)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color =
                      "";
                  }}
                >
                  {item.label}
                </Link>

              </li>

            ))}

          </ul>

        </div>

        {/* PAYMENT */}
        <div>

          <h3
            className="
              text-white
              font-black text-lg
              mb-6
              tracking-tight
              uppercase
              border-l-4
              pl-4
            "
            style={{
              borderColor:
                "var(--footer-action)",
            }}
          >
            Payment Methods
          </h3>

          <div className="
            grid grid-cols-3
            gap-2
          ">

            {[
              "Visa",
              "MasterCard",
              "Koko",
              "Mintpay",
              "Amex",
              "COD",
            ].map((name) => (

              <div
                key={name}
                className="
                  bg-white/5
                  border
                  border-white/10
                  h-9
                  rounded-lg
                  flex items-center
                  justify-center
                  text-[9px]
                  font-bold
                  text-gray-400
                  transition-all
                  duration-300
                  uppercase
                  tracking-tighter
                  cursor-default
                  shadow-sm
                "
                onMouseEnter={(e) => {
                  e.currentTarget.style.color =
                    "#fff";

                  e.currentTarget.style.borderColor =
                    "var(--footer-action)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color =
                    "";

                  e.currentTarget.style.borderColor =
                    "";
                }}
              >
                {name}
              </div>

            ))}

          </div>

        </div>

        {/* SOCIAL */}
        <div>

          <h3
            className="
              text-white
              font-black text-lg
              mb-6
              tracking-tight
              uppercase
              border-l-4
              pl-4
            "
            style={{
              borderColor:
                "var(--footer-action)",
            }}
          >
            Follow Us
          </h3>

          <div className="flex gap-3">

            {[
              {
                href:
                  settings.facebookUrl ||
                  "#",
                label: "Facebook",
              },
              {
                href:
                  settings.instagramUrl ||
                  "#",
                label: "Instagram",
              },
              {
                href:
                  settings.youtubeUrl ||
                  "#",
                label: "YouTube",
              },
            ].map((social) => (

              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={
                  social.label
                }
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center
                  justify-center
                  transition-all
                  duration-500
                  group
                "
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--footer-action)";

                  e.currentTarget.style.borderColor =
                    "var(--footer-action)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "";

                  e.currentTarget.style.borderColor =
                    "";
                }}
              >

                {social.label ===
                  "Facebook" && (

                  <svg
                    className="
                      w-6 h-6
                      fill-current
                      text-gray-400
                      group-hover:text-white
                      transition
                    "
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>

                )}

                {social.label ===
                  "Instagram" && (

                  <svg
                    className="
                      w-6 h-6
                      fill-current
                      text-gray-400
                      group-hover:text-white
                      transition
                    "
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.014-4.85-.072c-4.358-.2-6.78-2.622-6.98-6.98C.014 15.668 0 15.259 0 12c0-3.259.014-3.668.072-4.948.2-4.358 2.622-6.78 6.98-6.98C8.332.014 8.741 0 12 0z" />
                  </svg>

                )}

                {social.label ===
                  "YouTube" && (

                  <svg
                    className="
                      w-6 h-6
                      fill-current
                      text-gray-400
                      group-hover:text-white
                      transition
                    "
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.33zM9.75 15.02V8.48L15.45 11.75l-5.7 3.27z" />
                  </svg>

                )}

              </a>

            ))}

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="
        container mx-auto px-4
        border-t border-white/5
        mt-16 pt-8
        flex flex-col
        md:flex-row
        items-center
        justify-between
        text-[11px]
        text-gray-500
        tracking-widest
        uppercase
        font-bold
        relative
      ">

        <p>
          &copy;{" "}
          {new Date().getFullYear()}{" "}
          {settings.siteName ||
            "AffiliateShop.lk"}{" "}
          |{" "}
          {settings.siteTagline ||
            "Affiliate shopping guide"}
        </p>

        <div className="
          flex items-center gap-2
        ">

          <Link
            href="/admin"
            className="
              mt-6 md:mt-0
              opacity-[0.08]
              hover:opacity-100
              transition-all
              duration-500
              cursor-default
              hover:cursor-pointer
              flex items-center gap-2
              hover:scale-105
            "
            style={{
              color:
                "var(--footer-action)",
            }}
          >

            <div
              className="
                w-2 h-2
                rounded-full
                animate-pulse
              "
              style={{
                backgroundColor:
                  "var(--footer-action)",
                boxShadow:
                  "0 0 8px var(--footer-action)",
              }}
            />

            Secure System Portal

          </Link>

        </div>

      </div>

    </footer>
  );
}
