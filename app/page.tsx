"use client";

import { useEffect, useState } from "react";

const instagram = "https://www.instagram.com/lailamakeupartistry_/";
const email = "mailto:lailamakeupartistry@outlook.com";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>LAILA</span>
          <small>MAKEUP ARTISTRY</small>
        </a>

        <nav className="desktop-nav">
          <a href="#artistry">Artistry</a>
          <a href="#bridal">Bridal</a>
          <a href="#events">Events</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={email} className="header-cta">
          ENQUIRE
          <span>↗</span>
        </a>

        <button
          type="button"
          className={`menu-button ${menuOpen ? "active" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-label">
            <span>SYDNEY</span>
            <span>MAKEUP ARTISTRY</span>
          </div>

          <nav>
            <a href="#artistry" onClick={closeMenu}>
              <span>01</span>
              Artistry
            </a>
            <a href="#bridal" onClick={closeMenu}>
              <span>02</span>
              Bridal
            </a>
            <a href="#events" onClick={closeMenu}>
              <span>03</span>
              Events
            </a>
            <a href="#about" onClick={closeMenu}>
              <span>04</span>
              About
            </a>
            <a href="#contact" onClick={closeMenu}>
              <span>05</span>
              Contact
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <a href={email}>EMAIL ↗</a>
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              INSTAGRAM ↗
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-topline">
          <span>SYDNEY / AUSTRALIA</span>
          <span>BRIDAL + EVENT MAKEUP</span>
        </div>

        <div className="hero-title">
          <p>MAKEUP ARTISTRY BY</p>

          <h1>
            LAI<span>L</span>A
          </h1>

          <div className="hero-title-bottom">
            <em>for your moment.</em>
            <span>01 / 05</span>
          </div>
        </div>

        <div className="hero-layout">
          <div className="hero-description">
            <p>
              Bridal and event makeup artistry in Sydney, created around the
              occasion and the look you want to wear into it.
            </p>

            <div className="hero-links">
              <a href={email}>
                BOOKING ENQUIRY
                <span>↗</span>
              </a>

              <a href={instagram} target="_blank" rel="noreferrer">
                INSTAGRAM
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-art-number">L / 01</div>

            <div className="fashion-shape shape-one" />
            <div className="fashion-shape shape-two" />

            <div className="beauty-profile">
              <div className="profile-hair" />
              <div className="profile-face">
                <div className="profile-brow" />
                <div className="profile-eye" />
                <div className="profile-nose" />
                <div className="profile-lips" />
              </div>
              <div className="profile-neck" />
              <div className="profile-shoulder" />
            </div>

            <span className="hero-art-word">BEAUTY</span>
          </div>
        </div>

        <div className="scroll-note">
          <span />
          SCROLL TO DISCOVER
        </div>
      </section>

      <section className="statement" id="artistry">
        <div className="statement-meta">
          <span>01</span>
          <span>THE ARTISTRY</span>
        </div>

        <div className="statement-content">
          <p className="statement-kicker">THE LOOK / THE FEELING / YOU</p>

          <h2>
            Polished.
            <br />
            Considered.
            <br />
            <em>Still you.</em>
          </h2>

          <div className="statement-bottom">
            <p>
              Makeup can change the mood without changing the person. The
              direction starts with your occasion, your style and how you want
              to feel.
            </p>

            <div className="statement-mark">L</div>
          </div>
        </div>
      </section>

      <section className="bridal" id="bridal">
        <div className="section-heading">
          <div className="section-index">
            <span>02</span>
            <span>BRIDAL</span>
          </div>

          <h2>
            The bridal
            <br />
            <em>edit.</em>
          </h2>

          <p>
            A beauty direction for one of your most photographed and remembered
            days.
          </p>
        </div>

        <div className="bridal-grid">
          <div className="bridal-art" aria-hidden="true">
            <div className="veil-line veil-a" />
            <div className="veil-line veil-b" />
            <div className="veil-line veil-c" />

            <div className="front-face">
              <div className="front-hair hair-left" />
              <div className="front-hair hair-right" />

              <div className="front-skin">
                <div className="front-brow left" />
                <div className="front-brow right" />
                <div className="front-eye left" />
                <div className="front-eye right" />
                <div className="front-nose" />
                <div className="front-lips" />
              </div>
            </div>

            <span className="art-caption">BRIDAL / SYDNEY</span>
          </div>

          <div className="bridal-copy">
            <span className="copy-number">02 / BRIDAL</span>

            <h3>
              Your face.
              <br />
              Your dress.
              <br />
              Your <em>day.</em>
            </h3>

            <p className="large-copy">
              Bridal makeup should sit naturally within the whole picture —
              complementing you rather than competing with you.
            </p>

            <p className="small-copy">
              Share the beauty direction you have in mind when making your
              enquiry, from softer finishes to a more defined bridal look.
            </p>

            <a href={email} className="underline-link">
              BRIDAL ENQUIRY
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="interlude" aria-hidden="true">
        <span>BEAUTY</span>
        <em>in the details</em>
        <span>ARTISTRY</span>
      </section>

      <section className="events" id="events">
        <div className="event-copy">
          <div className="section-index light">
            <span>03</span>
            <span>EVENTS</span>
          </div>

          <h2>
            Ready for
            <br />
            <em>the occasion.</em>
          </h2>

          <p className="event-lead">
            Makeup for the nights, celebrations and moments when getting ready
            is part of the experience.
          </p>

          <p className="event-body">
            Your outfit, occasion and preferred beauty direction can all help
            shape the finished look.
          </p>

          <a href={email} className="underline-link light-link">
            EVENT ENQUIRY
            <span>↗</span>
          </a>
        </div>

        <div className="event-art" aria-hidden="true">
          <div className="event-art-top">
            <span>LAILA MAKEUP ARTISTRY</span>
            <span>03 / EVENT</span>
          </div>

          <div className="eye-art">
            <div className="eye-line upper" />
            <div className="eye-line lower" />
            <div className="iris">
              <span />
            </div>
          </div>

          <div className="event-orbit orbit-one" />
          <div className="event-orbit orbit-two" />

          <strong>AFTER</strong>
          <em>hours</em>
        </div>
      </section>

      <section className="details">
        <div className="details-heading">
          <span>THE DETAILS</span>

          <h2>
            One look.
            <br />
            <em>Your direction.</em>
          </h2>
        </div>

        <div className="details-list">
          <article>
            <span>01</span>
            <div>
              <h3>THE OCCASION</h3>
              <p>
                Tell Laila what you&apos;re getting ready for and when you need
                your booking.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>THE BEAUTY DIRECTION</h3>
              <p>
                Share the makeup references and overall feeling you have in
                mind.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>THE FINISHED LOOK</h3>
              <p>
                Bring the elements together into a look shaped around you and
                the occasion.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-art" aria-hidden="true">
          <div className="about-frame">
            <span className="about-label">SYDNEY / AU</span>

            <div className="abstract-portrait">
              <div className="abstract-hair" />
              <div className="abstract-face">
                <span className="abstract-eye eye-left" />
                <span className="abstract-eye eye-right" />
                <span className="abstract-mouth" />
              </div>
              <div className="abstract-body" />
            </div>

            <strong>L</strong>
          </div>

          <div className="about-art-footer">
            <span>MAKEUP ARTISTRY</span>
            <span>BRIDAL / EVENTS</span>
          </div>
        </div>

        <div className="about-copy">
          <div className="section-index">
            <span>04</span>
            <span>ABOUT</span>
          </div>

          <h2>
            Laila Makeup
            <br />
            <em>Artistry.</em>
          </h2>

          <p className="about-lead">
            Sydney-based makeup artistry for bridal and event occasions.
          </p>

          <p className="about-body">
            Each enquiry starts with the occasion and the beauty direction you
            have in mind, creating space for a look that feels considered and
            personal.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="underline-link"
          >
            VIEW INSTAGRAM
            <span>↗</span>
          </a>
        </div>
      </section>

      <section className="social">
        <div className="social-top">
          <span>FOLLOW THE ARTISTRY</span>
          <span>@LAILAMAKEUPARTISTRY_</span>
        </div>

        <div className="social-main">
          <h2>
            See more
            <br />
            on <em>Instagram.</em>
          </h2>

          <a href={instagram} target="_blank" rel="noreferrer">
            @LAILAMAKEUPARTISTRY_
            <span>↗</span>
          </a>
        </div>

        <div className="social-art" aria-hidden="true">
          <div className="social-card card-one">
            <span>01</span>
            <div className="lip-symbol" />
          </div>

          <div className="social-card card-two">
            <span>02</span>
            <strong>L</strong>
          </div>

          <div className="social-card card-three">
            <span>03</span>
            <div className="eye-symbol">
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-meta">
          <span>05 / BOOKINGS</span>
          <span>SYDNEY · NSW</span>
        </div>

        <div className="contact-main">
          <p>BRIDAL + EVENT ENQUIRIES</p>

          <h2>
            Have a date
            <br />
            in <em>mind?</em>
          </h2>

          <div className="contact-actions">
            <a href={email}>
              EMAIL LAILA
              <span>↗</span>
            </a>

            <a href={instagram} target="_blank" rel="noreferrer">
              SEND A DM
              <span>↗</span>
            </a>
          </div>
        </div>

        <a href={email} className="contact-email">
          lailamakeupartistry@outlook.com
        </a>
      </section>

      <footer>
        <a href="#home" className="footer-logo">
          <strong>LAILA</strong>
          <span>MAKEUP ARTISTRY</span>
        </a>

        <p>BRIDAL + EVENTS · SYDNEY</p>

        <div className="footer-links">
          <a href={email}>EMAIL</a>
          <a href={instagram} target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
        </div>
      </footer>
    </main>
  );
}