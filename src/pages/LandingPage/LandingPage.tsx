import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import smiling from '../../assets/smiling.png';
import Frame from '../../assets/Frame4507.png';
import Rectangle from '../../assets/Rectangle.svg';
import Invoice from '../../assets/Invoice.svg';
import tabler from '../../assets/tabler_free-rights.svg';
import shots from '../../assets/432shots_so 1.png';
import shots2 from '../../assets/956shots_so 2.svg';
import love from '../../assets/love4535.svg';
import key from '../../assets/keyVector.svg';
import man from '../../assets/man-running.svg';
import globe from '../../assets/globe.svg';
import iphone from '../../assets/iPhone 15.svg';
import women from '../../assets/women.svg';
import logo2 from '../../assets/Vector 2.svg';
import discord from '../../assets/discord-icon.svg';
import x from '../../assets/xicon.svg';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  const howItWorksRef = useRef<HTMLElement | null>(null);

  const scrollToSection = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landingpage-container">
      <section className="navbar">
        <img className="urgent2kay-logo" src={logo} alt="urgent2kay logo" />
        <div className="nav-buttons">
          <Link to="/login">
            <button className="sign-btn">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="join-btn">Join Urgent2kay</button>
          </Link>
        </div>
      </section>

      <section className="hero" id="hero">
        <div>
          <h1>
            Bundle Bills, Send Requests, Track Payments—{' '}
            <span className="highlight">All in One Place.</span>
          </h1>
          <p>
            Simplify your finances with URGENT 2KAY. Combine expenses, request funds from sponsors, and ensure payments go exactly where they’re needed.
          </p>
          <div className="cta-buttons">
            <Link to="/sign-up">
              <button className="get-started-btn">Get Started</button>
            </Link>
            <button onClick={scrollToSection} className="learn-more-btn">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-images">
          <img src={smiling} alt="Smiling person" className="smiling-img" />
          <img src={Frame} alt="Frame" className="frame-img" />
        </div>
      </section>

      <section className="how-it-works" id="how-it-works" ref={howItWorksRef}>
        <div className="how-it-works-details">
          <h4 className="section-title">How Urgent 2KAY Works</h4>
          <div className="icon-text">
            <div className="how-it-works-icon">
              <img src={Rectangle} alt="rectangle-icon" className="how-it-works-img" />
            </div>
            <p className="how-it-works-text">
              Make a Request - Tell us what bill you need help with (school, fees, rent, hospital bills, etc).
            </p>
          </div>
          <div className="icon-text">
            <div className="how-it-works-icon">
              <img src={Invoice} alt="invoice-icon" className="how-it-works-img" />
            </div>
            <p className="how-it-works-text">
              Sponsors pay directly to the service provider. No middleman wahala.
            </p>
          </div>
          <div className="icon-text">
            <div className="how-it-works-icon">
              <img src={tabler} alt="tabler-icon" className="how-it-works-img" />
            </div>
            <p className="how-it-works-text">Bill Settled! – You’re stress-free. No begging. No embarrassment.</p>
          </div>
        </div>
        <div>
          <img src={shots} className="how-it-works-shots" alt="illustration" />
        </div>
      </section>

      <section className="why-choose" id="why-choose">
        <div>
          <img src={shots2} className="why-choose-shots" alt="why choose us" />
        </div>
        <div className="how-it-works-details">
          <h4 className="section-title-one">Why Choose Urgent 2KAY?</h4>
          <div className="icon-text">
            <div className="how-it-works-icon">
              <img src={love} alt="love-icon" className="how-it-works-img" />
            </div>
            <p className="how-it-works-text">
              No More Awkwardness:
              <br />
              Ask for help the smart way.
            </p>
          </div>
          <div className="icon-text">
            <div className="how-it-works-icon">
              <img src={key} alt="key-icon" className="how-it-works-img" />
            </div>
            <p className="how-it-works-text">
              Secure Transactions:
              <br />
              Money goes straight to the bills—not through the requester.
            </p>
          </div>
          <div className="icon-text">
            <div className="how-it-works-icon">
              <img src={man} alt="man-running-icon" className="how-it-works-img" />
            </div>
            <p className="how-it-works-text">
              Fast & Easy:
              <br />
              Request, sponsor, and settle bills in minutes.
            </p>
          </div>
          <div className="icon-text">
            <div className="how-it-works-icon">
              <img src={globe} alt="globe-icon" className="how-it-works-img" />
            </div>
            <p className="how-it-works-text">
              Made for Every Nigerian:
              <br />
              Whether it’s school fees, hospital bills, or rent—we’ve got you.
            </p>
          </div>
        </div>
      </section>

      <section className="get-started" id="get-started">
        <div>
          <h4 className="section-title-one">Get started Today</h4>
          <p className="get-started-text">
            Join Thousands of Users and start Your <br />
            Financial Transformation
          </p>
          <Link to="/sign-up">
            <button className="join-one-btn">Join Urgent2kay</button>
          </Link>
        </div>
        <div>
          <img src={iphone} alt="iphone" className="iphone-img" />
        </div>
      </section>

      <section className="partner" id="partner">
        <div className="partner-details">
          <h4 className="section-title-one">Partner with Urgent 2KAY</h4>
          <ul>
            <li>Payment Gateways: Integration for seamless and secure transactions.</li>
            <li>Financial institutions: Collaboration on offering innovative financial services.</li>
            <li>Service Providers: We enable direct and bundled payments for our services</li>
          </ul>
          <Link to="/merchant-home">
            <button className="join-one-btn">Partner With Us</button>
          </Link>
        </div>
        <div>
          <img src={women} alt="women-icon" className="partner-img" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img className="urgent2kay-logo2" src={logo2} alt="urgent2kay logo" />
            <div className="social-icons">
              <img src={discord} alt="discord-icon" />
              <img src={x} alt="x-icon" />
            </div>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Product</h4>
              <Link to="/">
                <p>Dashboard</p>
              </Link>
              <Link to="/">
                <p>Generate Request</p>
              </Link>
              <Link to="/">
                <p>Transaction History</p>
              </Link>
            </div>
            <div className="link-column">
              <h4>Company</h4>
              <Link to="/">
                <p>Our Teams</p>
              </Link>
              <Link to="/">
                <p>Our Values</p>
              </Link>
              <Link to="/">
                <p>Blog</p>
              </Link>
            </div>
            <div className="link-column">
              <h4>Product</h4>
              <Link to="/">
                <p>Information</p>
              </Link>
              <Link to="/">
                <p>Documentation</p>
              </Link>
              <Link to="/">
                <p>Contact</p>
              </Link>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-newsletter">
          <div>
            <h4>Join our newsletter</h4>
            <p>keep up to date with everything reflect</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <Link to="/sign-up">
              <button className="join-one-btn">Join Urgent2kay</button>
            </Link>
          </form>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © 2025
            <img className="icon-logo-one" src={logo} alt="urgent2kay logo" />. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
