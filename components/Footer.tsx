"use client";
import React from "react";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { RxResume } from "react-icons/rx";
import { socialMedia } from "@/data";

const Footer = () => {
  const email = "harshvardhanvn1@gmail.com";

  return (
    <footer className="w-full pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96" />

      <div className="flex flex-col items-center gap-6">

        {/* CTA + Resume */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${email}`}>
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Download the resume (make sure the file exists in /public)
              Use basePath to work on GitHub Pages or subpaths */}
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Harshvardhan_Resume.pdf`}
            download="Harshvardhan_Resume.pdf"
            id="resume"
          >
            <MagicButton
              title="Resume"
              icon={<RxResume />}
              position="right"
            />
          </a>
          {/* If you prefer to open in a new tab instead of download:
              <a href="/Harshvardhan_Resume.pdf" target="_blank" rel="noreferrer"> ... </a>
          */}
        </div>

        {/* Social icons */}
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center backdrop-blur-lg bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.id}`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
