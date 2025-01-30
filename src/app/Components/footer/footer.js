"use client";

import Link from "next/link";

function Footer() {
  return (
    <footer className="Footer-section text-white py-4">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="col-md-6">
            <h5 className="mb-3">Unlimited UI</h5>
            <p>Connect with us</p>
            <div className="d-flex gap-3">
              <Link href="https://facebook.com">
                <i className="bi bi-facebook text-white"></i>
              </Link>
              <Link href="https://instagram.com">
                <i className="bi bi-instagram text-white"></i>
              </Link>
              <Link href="https://twitter.com">
                <i className="bi bi-twitter text-white"></i>
              </Link>
              <Link href="https://linkedin.com">
                <i className="bi bi-linkedin text-white"></i>
              </Link>
            </div>
          </div>

          {/* Center Section */}
          <div className="col-md-3">
            <ul className="list-unstyled footer-menu-list">
              <li>
                <Link href="/about" >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" >
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/employer-home">
                  Employer Home
                </Link>
              </li>
              <li>
                <Link href="/sitemap" >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="/credits">
                  Credits
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="col-md-3">
            <ul className="list-unstyled footer-menu-list">
              <li>
                <Link href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/fraud-alert" >
                  Fraud Alert
                </Link>
              </li>
              <li>
                <Link href="/trust-safety" >
                  Trust & Safety
                </Link>
              </li>
              <li>
                <Link href="/help-center" >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />

        {/* Bottom Section */}
        <div className="text-center">
          <p className="mb-0">
            UI HUT | © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
