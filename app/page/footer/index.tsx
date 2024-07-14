import FooterImage from "../../../public/Shortly (1).png";
import Image from "next/image";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <Image src={FooterImage} alt="rasm" />
      <div className="footer-info">
        <div className="footer-link">
          <ul>
            <li>
              <span>Features</span>
            </li>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="footer-link">
          <ul>
            <li>
              <span>Resources</span>
            </li>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-link">
          <ul>
            <li>
              <span>Company</span>
            </li>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-icon">
          <ul>
            <li>
              <ImFacebook2 />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
