import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
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
      <section className="navbar d-flex justify-content-between align-items-center px-4">
        <img className="urgent2kay-logo" src={logo} alt="urgent2kay logo" />
        <div className="nav-buttons d-flex gap-2">
          <Link to="/login">
            <Button className="sign-btn">Sign In</Button>
          </Link>
          <Link to="/sign-up">
            <Button className="join-btn">Join Urgent2kay</Button>
          </Link>
        </div>
      </section>

      <section className="hero" id="hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
             <h1 className="hero-heading">
  Bundle Bills, Send Requests, Track Payments—{' '}
  <span className="highlight">All in One Place.</span>
</h1>
<p className="hero-subtext">
  Simplify your finances with URGENT 2KAY. Combine expenses, request funds from sponsors,
  and ensure payments go exactly where they’re needed.
</p>

              <div className="cta-buttons d-flex gap-3">
                <Link to="/sign-up">
                  <Button className="get-started-btn">Get Started</Button>
                </Link>
                <Button onClick={scrollToSection} className="learn-more-btn">
                  Learn More
                </Button>
              </div>
            </Col>

            <Col md={6} className="hero-images position-relative">
              <img src={smiling} alt="Smiling person" className="smiling-img position-relative z-2" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="how-it-works" id="how-it-works" ref={howItWorksRef}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="how-it-works-details">
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
                <p className="how-it-works-text">
                  Bill Settled! – You’re stress-free. No begging. No embarrassment.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <img src={shots} className="how-it-works-shots" alt="illustration" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="why-choose" id="why-choose">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={shots2} className="why-choose-shots" alt="why choose us" />
            </Col>
            <Col md={6} className="how-it-works-details">
              <h4 className="section-title-one">Why Choose Urgent 2KAY?</h4>
              {[
                { icon: love, text: 'No More Awkwardness:\nAsk for help the smart way.' },
                { icon: key, text: 'Secure Transactions:\nMoney goes straight to the bills—not through the requester.' },
                { icon: man, text: 'Fast & Easy:\nRequest, sponsor, and settle bills in minutes.' },
                { icon: globe, text: 'Made for Every Nigerian:\nWhether it’s school fees, hospital bills, or rent—we’ve got you.' }
              ].map(({ icon, text }, index) => (
                <div key={index} className="icon-text">
                  <div className="how-it-works-icon">
                    <img src={icon} alt="icon" className="how-it-works-img" />
                  </div>
                  <p className="how-it-works-text">{text}</p>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="get-started" id="get-started">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h4 className="section-title-one">Get started Today</h4>
              <p className="get-started-text">
                Join Thousands of Users and start Your <br />
                Financial Transformation
              </p>
              <Link to="/sign-up">
                <Button className="join-one-btn">Join Urgent2kay</Button>
              </Link>
            </Col>
            <Col md={6}>
              <img src={iphone} alt="iphone" className="iphone-img" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="partner" id="partner">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="partner-details">
              <h4 className="section-title-one">Partner with Urgent 2KAY</h4>
              <ul>
                <li>Payment Gateways: Integration for seamless and secure transactions.</li>
                <li>Financial institutions: Collaboration on offering innovative financial services.</li>
                <li>Service Providers: We enable direct and bundled payments for our services</li>
              </ul>
              <Link to="/merchant-home">
                <Button className="join-one-btn">Partner With Us</Button>
              </Link>
            </Col>
            <Col md={6}>
              <img src={women} alt="women-icon" className="partner-img" />
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer">
        <Container>
          <div className="footer-top d-flex justify-content-between">
            <div className="footer-brand">
              <img className="urgent2kay-logo2" src={logo2} alt="urgent2kay logo" />
              <div className="social-icons d-flex gap-2">
                <img src={discord} alt="discord-icon" />
                <img src={x} alt="x-icon" />
              </div>
            </div>
            <div className="footer-links d-flex gap-4">
              {[
                { title: 'Product', links: ['Dashboard', 'Generate Request', 'Transaction History'] },
                { title: 'Company', links: ['Our Teams', 'Our Values', 'Blog'] },
                { title: 'Product', links: ['Information', 'Documentation', 'Contact'] }
              ].map((col, idx) => (
                <div key={idx} className="link-column">
                  <h4>{col.title}</h4>
                  {col.links.map((link, i) => (
                    <Link to="/" key={i}>
                      <p>{link}</p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="footer-newsletter d-flex justify-content-between align-items-center">
            <div>
              <h4>Join our newsletter</h4>
              <p>keep up to date with everything reflect</p>
            </div>
            <Form className="newsletter-form d-flex gap-2">
              <Form.Control type="email" placeholder="Enter your email" />
              <Link to="/sign-up">
                <Button className="join-one-btn">Join Urgent2kay</Button>
              </Link>
            </Form>
          </div>

          <hr className="footer-divider" />

          <div className="footer-bottom text-center">
            <p>
              © 2025 <img className="icon-logo-one" src={logo} alt="urgent2kay logo" />. All rights reserved
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default LandingPage;
