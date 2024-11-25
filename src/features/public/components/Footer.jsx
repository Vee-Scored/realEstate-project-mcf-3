import React from "react";
import Container from "../../../components/Container";
import facebookLogo from "../../../assets/FooterIcons/FacebookLogo.svg";
import EnvelopeSimple from "../../../assets/FooterIcons/EnvelopeSimple.svg";
import InstagramLogo from "../../../assets/FooterIcons/InstagramLogo.svg";
import LinkedinLogo from "../../../assets/FooterIcons/LinkedinLogo.svg";
import MapPin from "../../../assets/FooterIcons/MapPin.svg";
import PhoneCall from "../../../assets/FooterIcons/PhoneCall.svg";
import YoutubeLogo from "../../../assets/FooterIcons/YoutubeLogo.svg";
import Home from "../../../assets/FooterIcons/Home.svg";

const Footer = () => {
  return (
    <footer className="bg-neutral-700 text-white py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-2">
            <div className="text-xl font-bold text-blue-500 flex items-center ">
              <img src={Home} className="size-6" />
              Estatela
            </div>
            <p className="mt-2 text-sm flex">
              Bringing you closer to your dream home, one click at a time.
            </p>
            <div className="flex gap-4 mt-4">
              {/* Social Icons (replace # with actual links) */}
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={facebookLogo} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={InstagramLogo} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={YoutubeLogo} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={LinkedinLogo} />
              </a>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <ul className="text-sm space-y-2">
              <li className="flex items-start">
                <span className="mr-2">
                  <img src={MapPin} />
                </span>
                <span>456, Inner Road, Holy Park, California, USA.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  <img src={PhoneCall} />
                </span>
                <span>
                  +6634526313 <br /> +6634526313
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">
                  <img src={EnvelopeSimple} />
                </span>
                <span>
                  estatela123@gmail.com <br /> estatela456@gmail.com
                </span>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Useful Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  All properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Our best services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8  text-sm text-neutral-50">
          © 2024 Estatela. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
