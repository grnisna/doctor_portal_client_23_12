import React from "react";
import { Link } from "react-router-dom";
import footerBGImage from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div
      style={{
        background: `url(${footerBGImage})`,
        backgroundSize: "contain",
      }}

      className="py-5"
    >
      <footer class="footer p-10 text-neutral-content text-black ">
        <div>
          <span class="footer-title text-black">Services</span>
          <Link class="link link-hover text-black">Marketing</Link>
          <Link class="link link-hover text-black">Design</Link>
          <Link class="link link-hover text-black">Advertisement</Link>
          <Link class="link link-hover text-black">Branding</Link>
        </div>
        <div>
          <span class="footer-title text-black">Company</span>
          <Link class="link link-hover text-black">About us</Link>
          <Link class="link link-hover text-black">Contact</Link>
          <Link class="link link-hove text-black">Jobs</Link>
          <Link class="link link-hover text-black">Press kit</Link>
        </div>
        <div>
          <span class="footer-title text-black">Legal</span>
          <Link class="link link-hover text-black">Terms of use</Link>
          <Link class="link link-hover text-black">Privacy policy</Link>
          <Link class="link link-hover text-black">Cookie policy</Link>
        </div>
      </footer>

      <div className="text-center">
        <p>Copyright © 2022 - All right reserved by Golam Rasul</p>
      </div>
    </div>
  );
};

export default Footer;
