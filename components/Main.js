import React, { useEffect } from "react";
import Link from "next/link";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import CircularProgress from "@mui/material/CircularProgress";
import DonaldCanvas from "./homeComponent/donald";
// import Experience from "../pages/models/love/experience";
import dynamic from "next/dynamic";
import LoveBanner from "./homeComponent/loveBanner";

const Main = (props) => {
  useEffect(() => {
    let newSwiper = new Swiper(".new-swiper", {
      spaceBetween: 24,
      loop: "true",
      slidesPerView: "auto",
      centeredSlides: true,

      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 80,
        },
      },
    });
  }, []);

  let canvasStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    // backgroundColor: "#bfe3dd",
  };
  return (
    <main className="main">
      {/*==================== HOME ====================*/}
      <section className="home" id="home">
        <div className="home__container container grid">
          {/* <img src="assets/img/home.png" alt="" className="home__img" /> */}
          <DonaldCanvas></DonaldCanvas>
          <div className="home__data">
            <h1 className="home__title">
              Wish in 3D <br /> With bruhh!..
            </h1>
            <p className="home__description">
              {/* Christmas and a new year is about to begin, all good wishes and
              successes. */}
              Celebrate beautiful moments in 3D
            </p>
            <a href="#experiences" className="button">
              Wish Someone
            </a>
          </div>
        </div>
      </section>
      {/*==================== GIVING ====================*/}
      {/* <section className="giving section container">
        <h2 className="section__title">
          Start Giving This <br /> Christmas
        </h2>
        <div className="giving__container grid">
          <div className="giving__content">
            <img src="assets/img/giving1.png" alt="" className="giving__img" />
            <h3 className="giving__title">Surprise gifts</h3>
            <p className="giving__description">
              They are the best gifts there is.
            </p>
          </div>
          <div className="giving__content">
            <img src="assets/img/giving2.png" alt="" className="giving__img" />
            <h3 className="giving__title">Ornaments</h3>
            <p className="giving__description">Give a moment to decorate.</p>
          </div>
          <div className="giving__content">
            <img src="assets/img/giving3.png" alt="" className="giving__img" />
            <h3 className="giving__title">Lots of love</h3>
            <p className="giving__description">
              Give away feelings that last forever.
            </p>
          </div>
        </div>
      </section> */}

      {/*==================== GIFT ====================*/}
      <section className="gift section container" id="experiences">
        <h2 className="section__title">Experiences</h2>
        <div className="gift__container grid">
          <div>
            <Link href="/models/love">
              <article className="gift__card">
                {/* <img src="assets/love/display.png" alt="" className="gift__img" /> */}
                <video
                  style={{ width: "100%", borderRadius: "inherit" }}
                  poster="assets/img/loader.gif"
                  preload="auto"
                  autoPlay
                  muted
                  loop
                >
                  <source src="assets/love/video.mp4" type="video/mp4"></source>
                </video>
              </article>
            </Link>
            <p className="model__description">
              Share the Romantic Experience to your Sweetheart. Add your
              personal messege, send them a their personal 3D experience webpage
              link and make them feel special.
            </p>
          </div>
          {/* <article className="gift__card">
            <img src="assets/img/gift2.png" alt="" className="gift__img" />
            <i className="bx bx-heart gift__icon" />
            <h3 className="gift__price">$22</h3>
            <span className="gift__title">Santa Claus Hat</span>
          </article>
          <article className="gift__card">
            <img src="assets/img/gift3.png" alt="" className="gift__img" />
            <i className="bx bx-heart gift__icon" />
            <h3 className="gift__price">$48</h3>
            <span className="gift__title">Christmas Tree</span>
          </article>
          <article className="gift__card">
            <img src="assets/img/gift4.png" alt="" className="gift__img" />
            <i className="bx bx-heart gift__icon" />
            <h3 className="gift__price">$35</h3>
            <span className="gift__title">Snowman</span>
          </article>
          <article className="gift__card">
            <img src="assets/img/gift5.png" alt="" className="gift__img" />
            <i className="bx bx-heart gift__icon" />
            <h3 className="gift__price">$12</h3>
            <span className="gift__title">Candy Stick</span>
          </article>
          <article className="gift__card">
            <img src="assets/img/gift2.png" alt="" className="gift__img" />
            <i className="bx bx-heart gift__icon" />
            <h3 className="gift__price">$22</h3>
            <span className="gift__title">Santa Claus Hat</span>
          </article> */}
        </div>
      </section>
      {/*==================== NEW ====================*/}
      <section className="new section container" id="new">
        <h2 className="section__title">New Experiences</h2>
        <div className="new__container">
          <div className="swiper new-swiper">
            <div className="swiper-wrapper">
              <Link href="/models/love">
                <article className="new__card swiper-slide">
                  {/* <div className="new__overlay" /> */}
                  <video
                    style={{ width: "100%", objectFit: "fill" }}
                    autoPlay
                    muted
                    loop
                  >
                    <source
                      src="assets/love/video.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                  {/* <img src="assets/img/new1.png" alt="" className="new__img" /> */}
                  <h3 className="new__price">$Free</h3>
                  <span className="new__title">
                    Share the Romantic Experience to your Sweetheart. Add your
                    personal messege, send them a personal Experience webpage
                    link and make them feel special.
                  </span>
                  {/* <button className="button new__button">
                    <i className="bx bx-heart new__icon" />
                  </button> */}
                </article>
              </Link>

              {/* <article className="new__card swiper-slide">
                <div className="new__overlay" />
                <img src="assets/img/new2.png" alt="" className="new__img" />
                <h3 className="new__price">$20</h3>
                <span className="new__title">Snow Globe</span>
                <button className="button new__button">
                  <i className="bx bx-heart new__icon" />
                </button>
              </article>
              <article className="new__card swiper-slide">
                <div className="new__overlay" />
                <img src="assets/img/new3.png" alt="" className="new__img" />
                <h3 className="new__price">$75</h3>
                <span className="new__title">Sledge</span>
                <button className="button new__button">
                  <i className="bx bx-heart new__icon" />
                </button>
              </article>
              <article className="new__card swiper-slide">
                <div className="new__overlay" />
                <img src="assets/img/new4.png" alt="" className="new__img" />
                <h3 className="new__price">$15</h3>
                <span className="new__title">Christmas Wreath</span>
                <button className="button new__button">
                  <i className="bx bx-heart new__icon" />
                </button>
              </article> */}
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </section>
      {/*==================== CELEBRATE ====================*/}
      <section className="celebrate section container" id="submit-assets">
        <div className="celebrate__container grid">
          <div className="celebrate__data">
            <h2 className="section__title celebrate__title">
              Celebrate With A <br /> Lot Of Love
            </h2>
            <p className="celebrate__description">
              In this holidays, celebrate with much love and peace, offering
              many blessings to our loved ones, friends and neighbors, wishing
              them a good Christmas message.
            </p>
            <a href="#" className="button">
              Send Good Wishes
            </a>
          </div>
          <img
            src="assets/img/celebrate.png"
            alt=""
            className="celebrate__img"
          />
        </div>
      </section>
      {/*==================== MESSAGE ====================*/}
      <section className="message section container">
        <div className="message__container grid">
          <form action="true" className="message__form">
            <h2 className="message__title">
              Send Good <br /> Wishes!
            </h2>
            <input
              type="email"
              placeholder="Write your message"
              className="message__input"
            />
            <button className="button message__button">Send Message</button>
          </form>
          <img src="assets/img/message.png" alt="" className="message__img" />
        </div>
      </section>
    </main>
  );
};

export default Main;
