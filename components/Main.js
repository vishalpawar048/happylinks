import React, { useEffect } from "react";
import Link from "next/link";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

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
  return (
    <main className="main">
      {/*==================== HOME ====================*/}
      <section className="home" id="home">
        <div className="home__container container grid">
          <img src="assets/img/home.png" alt="" className="home__img" />
          <div className="home__data">
            <h1 className="home__title">
              Merry Christmas and <br /> Happy New Year!
            </h1>
            <p className="home__description">
              Christmas and a new year is about to begin, all good wishes and
              successes.
            </p>
            <a href="#" className="button">
              Get Started
            </a>
          </div>
        </div>
      </section>
      {/*==================== GIVING ====================*/}
      <section className="giving section container">
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
      </section>
      {/*==================== CELEBRATE ====================*/}
      <section className="celebrate section container" id="celebrate">
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
      {/*==================== GIFT ====================*/}
      <section className="gift section container" id="gift">
        <h2 className="section__title">Share A Gift</h2>
        <div className="gift__container grid">
          <Link href="/models/love">
            <article className="gift__card">
              <img src="assets/img/gift1.png" alt="" className="gift__img" />
              <i className="bx bx-heart gift__icon" />
              <h3 className="gift__price">$15</h3>
              <span className="gift__title">Gingerbread</span>
            </article>
          </Link>
          <article className="gift__card">
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
        </div>
      </section>
      {/*==================== NEW ====================*/}
      <section className="new section container" id="new">
        <h2 className="section__title">New Gifts</h2>
        <div className="new__container">
          <div className="swiper new-swiper">
            <div className="swiper-wrapper">
              <article className="new__card swiper-slide">
                <div className="new__overlay" />
                <img src="assets/img/new1.png" alt="" className="new__img" />
                <h3 className="new__price">$95</h3>
                <span className="new__title">Reindeer</span>
                <button className="button new__button">
                  <i className="bx bx-heart new__icon" />
                </button>
              </article>
              <article className="new__card swiper-slide">
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
              </article>
            </div>
            <div className="swiper-pagination" />
          </div>
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