import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="footer p-10  text-base-content">
        <div>
          <span className="footer-title">Useful Links</span>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Tarms & Conditions</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Address</span>
          <p>
            State/province/area: Dhaka <br />
            Phone number 0171212121 <br />
            Zip code 1231 <br />
            Country calling code +880 <br />
            Country Bangladesh
          </p>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t  text-base-content border-base-300">
        <div className="items-center grid-flow-col">
          <img
            className="w-24"
            src={"https://i.ibb.co/b5x01DM/logo.png"}
            alt=""
          />
          <p>
            ToyLand Co. Ltd. <br />
            Providing reliable tech since 2023
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link to={"#"}>
              <FaFacebookSquare />
            </Link>
            <Link to={"#"}>
              <FaInstagramSquare />
            </Link>
            <Link to={"#"}>
              <FaTwitterSquare />
            </Link>
            <Link to={"#"}>
              <FaYoutubeSquare />
            </Link>
          </div>
        </div>
      </footer>
      <p className="text-center bg-black text-white"><small>Copyright All right reserved || 2023 || ToyLand</small></p>
    </div>
  );
};

export default Footer;
