import Link from 'next/link';
import Image from 'next/image';
import { footerLinks } from '@/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="footer__rights">
          <Image 
            src="/logo.svg" 
            alt="logo" 
            width={118} 
            height={18} 
            className="footer__logo"
          />
          <p className="footer__text">
            Carhub 2025 <br />
            All rights reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="footer__link-title">{link.title}</h3>
              {link.links.map((item) => (
                <Link 
                  key={item.title} 
                  href={item.url} 
                  className="footer__link-item"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__copyrights">
        <p className="footer__copyrights-text">
          @2025 CarHub. All Rights Reserved
        </p>
        <div className="footer__copyrights-link">
          <Link href="/" className="footer__link-item">
            Privacy Policy
          </Link>
          <Link href="/" className="footer__link-item">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
