import { GithubIcon, MailIcon, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div>
      <h1 className="text-custom-900">Hi! Fumi Melvin</h1>
      <p className="body-2 text-custom-700">
        As a skilled full-stack web developer and proficient Flutter developer,
        my objective is to leverage my expertise in both front-end and back-end
        technologies such as HTML, CSS, JavaScript, Node.js, React, Express, and
        NextJS, to contribute effectively to innovative projects.
      </p>
      <div className="flex items-center space-x-4 text-custom-700">
        <p className="flex items-center space-x-1">
          <MapPin />
          <span>Gauteng, South Africa</span>
        </p>
        <Link href="mailto:fumelvin.ngobeni@gmail.com">
          <MailIcon />
        </Link>
        <Link href="https://github.com/FumiMelvinDev">
          <GithubIcon />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
