import React from 'react';
import './HeroSectionFirst.scss';
import '../Buttons/BookButton.scss';
const HeroSectionFirst = () => {
  return (
    <section className="hero-section-first">
      <div className="hero-container-first">
        <div className="hero-info-first">
          <h1>Meet your new dentist</h1>
          <h2>Dental done differently.</h2>
          <div className="hero-contact-div">
            <button className="book-button">Book online</button>
            <p className="call-info">
              OR CALL:{' '}
              <a href="tel:+62896706255135" className="phone-call-info">
                +40 755 353 435
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionFirst;
