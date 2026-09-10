export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="assets/pahrump.jpg"
        alt="Mountain Falls pond and mountains in Pahrump, Nevada"
        width="1920"
        height="1080"
        fetchPriority="high"
      />
      <div className="hero-content">
        <p className="eyebrow light">
          PAHRUMP, NEVADA · THE RIDGE REALTY GROUP
        </p>
        <h1 id="hero-title">
          A place to call home.
          <br />
          <em>A partner to get you there.</em>
        </h1>
        <p>
          Local knowledge. Personal attention.
          <br />
          Your next chapter starts in Pahrump.
        </p>
        <div className="hero-actions">
          <a className="button gold" href="#listings">
            Find your dream home <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link light" href="tel:+12069196886">
            Call now · (206) 919-6886
          </a>
        </div>
      </div>
      <div className="hero-bottom">
        <span>MARCI METZGER · PAHRUMP REALTOR</span>
        <a href="#about">
          Discover the difference <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="intro section wrap" id="about">
      <div className="portrait">
        <img
          src="assets/marci.jpg"
          alt="Marci Metzger, Pahrump Realtor"
          width="730"
          height="1095"
          loading="lazy"
        />
        <div className="portrait-label">
          <span>YOUR LOCAL REAL ESTATE PARTNER</span>
          <strong>Marci Metzger</strong>
        </div>
      </div>
      <div className="intro-copy">
        <p className="eyebrow">EXPERIENCE THAT FEELS PERSONAL</p>
        <h2>
          Meet Marci.
          <br />
          <em>Make your next move.</em>
        </h2>
        <p className="lead">Realtor for nearly 3 decades.</p>
        <p>
          Our team works hard every day to grow and learn, so that we may
          continue to excel in our market. Our clients deserve our best, and we
          want to make sure our best is better every year.
        </p>
        <p>
          We live, work, and play in this community. Whether you’re buying,
          selling, or exploring what’s next, you’ll have a pro at your service.
        </p>
        <a className="text-link" href="#contact">
          Let’s start a conversation <span aria-hidden="true">↗</span>
        </a>
        <div className="signature">Marci Metzger</div>
        <span className="small">THE RIDGE REALTY GROUP</span>
      </div>
    </section>
  );
}

export function Results() {
  return (
    <section className="results" id="results">
      <div className="wrap section">
        <div className="section-head">
          <div>
            <p className="eyebrow light">LOCAL EXPERTISE. REAL RESULTS.</p>
            <h2>
              Don’t just list it.
              <br />
              <em>Get it sold.</em>
            </h2>
          </div>
          <div className="results-statement">
            <h3>Top Residential Sales Last 5 Years</h3>
            <p>
              We helped nearly 90 clients in 2021, and closed 28.5 million in
              sales!
            </p>
            <span className="small">
              Sales highlights as reported on the original homepage.
            </span>
          </div>
        </div>
        <div className="stats">
          <div>
            <strong>$28.5M</strong>
            <span>IN CLOSED SALES · 2021</span>
          </div>
          <div>
            <strong>Nearly 90</strong>
            <span>CLIENTS HELPED · 2021</span>
          </div>
          <div>
            <strong>Nearly 30</strong>
            <span>YEARS OF EXPERIENCE</span>
          </div>
        </div>
        <div className="approach-grid">
          <article>
            <img
              src="assets/sales.jpg"
              alt="Residential property featured on Marci’s homepage"
              loading="lazy"
              width="600"
              height="400"
            />
            <div>
              <span className="small">01 / COMMITTED TO RESULTS</span>
              <h3>Your goals. Our best.</h3>
              <p>
                Our clients deserve our best. We keep growing and learning to
                deliver an even better experience every year.
              </p>
            </div>
          </article>
          <article>
            <img
              src="assets/sell.jpg"
              alt="Home marketing and selling"
              loading="lazy"
              width="600"
              height="400"
            />
            <div>
              <span className="small">02 / FOR SELLERS</span>
              <h3>Don’t just list it…</h3>
              <p>
                Get it SOLD! We exhaust every avenue to ensure our listings are
                at the fingertips of every possible buyer, getting you top
                dollar for your home.
              </p>
              <a className="text-link light" href="#contact">
                Let’s sell your home ↗
              </a>
            </div>
          </article>
          <article>
            <img
              src="assets/buyers.jpg"
              alt="A home for your next chapter"
              loading="lazy"
              width="600"
              height="400"
            />
            <div>
              <span className="small">03 / GUIDE TO BUYERS</span>
              <h3>A pro at your service.</h3>
              <p>
                Nobody knows the market like we do. Enjoy having a pro at your
                service. Market analysis, upgrades lists, contractors on speed
                dial, and more!
              </p>
              <a className="text-link light" href="#listings">
                Explore your next move ↗
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services section">
      <div className="wrap">
        <div className="center-heading">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>
            Every property.
            <br />
            <em>The same personal care.</em>
          </h2>
        </div>
        <div className="service-grid">
          <article>
            <img
              src="assets/service-right.jpg"
              alt="Real estate guidance"
              width="500"
              height="350"
              loading="lazy"
            />
            <span className="small">01</span>
            <h3>Real Estate Done Right</h3>
            <p>
              Nervous about your property adventure? Don’t be. Whether you’re
              getting ready to buy or sell your residence, looking at investment
              properties, or just curious about the markets, our team ensures
              you get the best experience possible!
            </p>
          </article>
          <article>
            <img
              src="assets/service-property.jpg"
              alt="Commercial and residential property"
              width="500"
              height="350"
              loading="lazy"
            />
            <span className="small">02</span>
            <h3>Commercial &amp; Residential</h3>
            <p>
              Large or small, condo or mansion, we can find it and get it at the
              price that’s right. Fixer-uppers? Luxury? We can help with all of
              it! We live, work, and play in this community. Happy to help you
              find where to put your hard-earned dollars.
            </p>
          </article>
          <article>
            <img
              src="assets/service-expertise.jpg"
              alt="Professional property expertise"
              width="500"
              height="350"
              loading="lazy"
            />
            <span className="small">03</span>
            <h3>Rely on Expertise</h3>
            <p>
              If you have questions about affordability, credit, and loan
              options, trust us to connect you with the right people to get the
              answers you need in a timely fashion. We make sure you feel
              confident and educated every step of the way.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ClosingPhoto() {
  return (
    <section className="closing-photo" aria-label="Real estate">
      <img
        src="assets/hero.jpg"
        alt="Real estate imagery from the original homepage"
        loading="lazy"
        width="1920"
        height="600"
      />
      <div>
        <p className="eyebrow light">PAHRUMP, NEVADA</p>
        <h2>
          Your next chapter.
          <br />
          <em>Our hometown.</em>
        </h2>
        <a className="button gold" href="#contact">
          Let’s find your place ↗
        </a>
      </div>
    </section>
  );
}

export function ContactDetails() {
  return (
    <div>
      <p className="eyebrow">CALL OR VISIT</p>
      <h2>
        Let’s make
        <br />
        <em>your move.</em>
      </h2>
      <p>Marci Metzger · The Ridge Realty Group</p>
      <a className="contact-phone" href="tel:+12069196886">
        (206) 919-6886
      </a>
      <address>
        3190 HW-160, Suite F<br />
        Pahrump, Nevada 89048, United States
      </address>
      <a
        className="text-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps/search/?api=1&amp;query=3190+NV-160+Suite+F+Pahrump+NV+89048"
      >
        Get directions ↗
      </a>
      <div className="hours">
        <h3>Office hours</h3>
        <p>Open daily · 8:00 am – 7:00 pm</p>
        <p className="muted">
          Appointments outside office hours available upon request. Just call!
        </p>
      </div>
    </div>
  );
}

export function Affiliations() {
  return (
    <div className="affiliations wrap">
      <img
        src="assets/ridge.png"
        alt="The Ridge Realty Group"
        loading="lazy"
        width="90"
        height="90"
      />
      <img
        src="assets/equal-housing.png"
        alt="Equal Housing Opportunity"
        loading="lazy"
        width="70"
        height="70"
      />
      <img
        src="assets/realtor.jpg"
        alt="Realtor"
        loading="lazy"
        width="78"
        height="70"
      />
      <img
        src="assets/chamber.jpg"
        alt="Chamber of Commerce"
        loading="lazy"
        width="80"
        height="80"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <a className="footer-brand" href="#home">
          MARCI METZGER<span>THE RIDGE REALTY GROUP</span>
        </a>
        <div className="socials">
          <a
            href="https://www.facebook.com/MarciHomes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook ↗
          </a>
          <a
            href="https://www.instagram.com/marcimetzger_theridge/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </a>
          <a
            href="https://www.linkedin.com/in/marci-metzger-30642496/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yelp ↗
          </a>
        </div>
        <div className="footer-bottom">
          <span>Copyright © 2026 Marci Metzger — All Rights Reserved.</span>
          <span>
            Independent homepage redesign ·{" "}
            <a
              href="https://marcimetzger.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Original website ↗
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
