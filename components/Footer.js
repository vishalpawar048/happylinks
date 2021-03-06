import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className="footer section">
        <div className="footer__container container grid">
          {/* <div>
            <a href="/" className="footer__logo">
              <img
                src="/assets/img/logo.png"
                alt=""
                className="footer__logo-img"
              />
              Christmas
            </a>
            <p className="footer__description">
              This Christmas give <br /> a lot of love
            </p>
          </div> */}
          {/* <div>
            <h3 className="footer__title">Our Services</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Discounts
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Shipping mode
                </a>
              </li>
            </ul>
          </div> */}
          <div style={{ disply: "flex", justifyContent: "center" }}>
            <h3 className="footer__title">Connect With Us</h3>
            <ul className="footer__links">
              <li>
                <a
                  href="https://www.instagram.com/bruhh_vr"
                  target="_blank"
                  className="footer__link"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Bruhh-100311925896073"
                  target="_blank"
                  className="footer__link"
                >
                  Facebook
                </a>
              </li>
              {/* <li>
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h3 className="footer__title">Available On</h3>
            <div className="footer__aviables">
              <img
                src="/assets/img/aviable1.png"
                alt=""
                className="footer__aviable-img"
              />
              <img
                src="/assets/img/aviable2.png"
                alt=""
                className="footer__aviable-img"
              />
            </div>
          </div> */}
          <img src="/assets/img/footer1.png" alt="" className="footer__img1" />
          <img src="/assets/img/footer2.png" alt="" className="footer__img2" />
        </div>
        <span className="footer__copy">?? bruhh.io All rigths reserved</span>
      </footer>
    </>
  );
};

export default Footer;
