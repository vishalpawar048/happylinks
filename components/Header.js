import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Header = (props) => {
  useEffect(() => {
    const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

    /*===== MENU SHOW =====*/
    /* Validate if constant exists */
    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    /*===== MENU HIDDEN =====*/
    /* Validate if constant exists */
    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="/" className="nav__logo">
          <img src="/assets/love/heart.png" alt="" className="nav__logo-img" />
          bruhh..
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <Link href="/#experiences">
                {/* <a href="#experiences" className="nav__link"> */}
                Experiences
                {/* </a> */}
              </Link>
            </li>

            {/* <li className="nav__item">
              <Link href="/#submit-assets">Submit Assets</Link>
            </li> */}
            {/* <li className="nav__item">
              <a href="#new" className="nav__link">
                About Us
              </a>
            </li> */}
          </ul>

          <div className="nav__close" id="nav-close">
            {/* <i className="bx bx-x"></i>
             */}
            <Icon icon="bx:bx-x" />
          </div>

          <img src="/assets/love/heart.png" alt="" className="nav__img" />
        </div>
        <div className="nav__btns">
          {/* <i className="bx bx-moon change-theme" id="theme-button"></i> */}

          <div className="nav__toggle" id="nav-toggle">
            {/* <i className="bx bx-grid-alt"></i> */}
            {/* <Icon icon="bx:bx-grid-alt" /> */}
            <Icon icon="carbon:overflow-menu-horizontal" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
