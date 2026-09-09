"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const practices = [
  ["01", "Car Accidents", "Serious crashes, uninsured drivers, hit-and-runs and complex insurance claims."],
  ["02", "Motorcycle Accidents", "Focused representation for riders facing severe injuries and difficult liability questions."],
  ["03", "Truck Accidents", "Commercial vehicle cases involving high-impact injuries and multiple responsible parties."],
  ["04", "Pedestrian & Bicycle", "Protection for vulnerable road users injured by negligent drivers."],
  ["05", "Wrongful Death", "Compassionate advocacy for families navigating loss caused by negligence."],
  ["06", "Premises Injuries", "Slip-and-fall, dog bite and other injury claims involving unsafe conditions."],
];

const reviews = [
  {
    name: "Jesse C.",
    quote: "Claudia made the entire process smooth, stress free, and easy to understand.",
  },
  {
    name: "Jing M.",
    quote: "Krasney Law worked on my injury settlement tirelessly.",
  },
  {
    name: "Arianna S.",
    quote: "They provided the care, answers and information I needed throughout my case.",
  },
];

const locations = [
  {
    city: "San Bernardino",
    label: "Main Office",
    address: "362 W. 6th St.\nSan Bernardino, CA 92401",
    phone: "(909) 380-7200",
  },
  {
    city: "Rancho Cucamonga",
    label: "Inland Empire Office",
    address: "10601 Civic Center Dr., Suite 100M\nRancho Cucamonga, CA 91730",
    phone: "(909) 506-2494",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const reduce = useReducedMotion();
  const orbY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 54]);

  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="#top" aria-label="Krasney Law home">
          <span className="brandMark">KL</span>
          <span className="brandWords">
            <strong>Krasney Law</strong>
            <small>Accident Attorneys</small>
          </span>
        </a>

        <nav className="desktopNav" aria-label="Primary navigation">
          <a href="#practice">Practice Areas</a>
          <a href="#firm">Our Firm</a>
          <a href="#reviews">Reviews</a>
          <a href="#locations">Locations</a>
        </nav>

        <a className="headerCall" href="tel:+19093807200">
          <small>24/7 Consultation</small>
          <strong>(909) 380-7200</strong>
        </a>
      </header>

      <section className="hero" id="top" ref={heroRef}>
        <motion.div className="heroOrb" style={{ y: orbY }} aria-hidden="true" />
        <div className="heroGrid" aria-hidden="true" />

        <motion.div className="heroCopy" style={{ y: headlineY }}>
          <motion.p
            className="eyebrow"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            California Personal Injury Law · Since 1987
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 34 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            When everything changes in a second,
            <em> your next move matters.</em>
          </motion.h1>

          <motion.p
            className="heroLead"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18 }}
          >
            Local Inland Empire representation with statewide reach. Personal attention, experienced advocacy and a free case review when you need answers fast.
          </motion.p>

          <motion.div
            className="heroActions"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
          >
            <a className="button buttonPrimary" href="#consultation">Start a Free Case Review <Arrow /></a>
            <a className="button buttonGhost" href="tel:+19093807200">Call Now</a>
          </motion.div>
        </motion.div>

        <motion.aside
          className="heroCard"
          initial={reduce ? false : { opacity: 0, x: 36 }}
          animate={reduce ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="heroCardKicker">Krasney Law</span>
          <div className="heroCardSeal">KL</div>
          <h2>Local counsel.<br />Personal attention.</h2>
          <p>Your case should never feel like a file number.</p>
          <div className="heroCardLine" />
          <div className="heroCardMeta">
            <span>San Bernardino</span>
            <span>Rancho Cucamonga</span>
          </div>
        </motion.aside>
      </section>

      <section className="trustBar" aria-label="Firm highlights">
        <div><strong>1987</strong><span>Practicing law since</span></div>
        <div><strong>Free</strong><span>Initial consultation</span></div>
        <div><strong>$0</strong><span>Fee unless recovery</span></div>
        <div><strong>CA</strong><span>Statewide service</span></div>
      </section>

      <section className="section practiceSection" id="practice">
        <Reveal className="sectionHeading">
          <p className="eyebrow darkEyebrow">Focused representation</p>
          <h2>Built around the cases that change lives.</h2>
          <p>Clear choices, less clutter. The full SEO library can remain underneath the site without forcing every visitor through a mega-menu.</p>
        </Reveal>

        <div className="practiceGrid">
          {practices.map(([num, title, copy], index) => (
            <Reveal key={title} delay={index * 0.055}>
              <a className="practiceCard" href="#consultation">
                <span className="cardNum">{num}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <Arrow />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="splitSection" id="firm">
        <Reveal className="splitIntro">
          <p className="eyebrow">Why Krasney Law</p>
          <h2>Big-firm capability.<br /><em>Local-firm attention.</em></h2>
        </Reveal>

        <div className="splitContent">
          <Reveal>
            <p className="bigCopy">People do not hire a personal injury attorney because life is going smoothly. They hire one when the insurance calls, medical bills arrive and the next step is unclear.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p>Krasney Law has served injured Californians for decades while emphasizing direct communication and a personal working relationship. The redesign makes that human advantage the center of the brand instead of burying it under pages of text.</p>
          </Reveal>
          <Reveal delay={0.14}>
            <a className="textLink" href="#consultation">Talk to the firm <Arrow /></a>
          </Reveal>
        </div>
      </section>

      <section className="attorneySection">
        <div className="attorneyVisual" aria-hidden="true">
          <div className="attorneyMonogram">RK</div>
          <span>Attorney profile</span>
        </div>
        <Reveal className="attorneyCopy">
          <p className="eyebrow darkEyebrow">Robert A. Krasney</p>
          <h2>Decades of legal experience, presented with modern clarity.</h2>
          <p>Attorney at Law since December 1987. Education includes the University of California, Los Angeles and California Southern Law School in Riverside.</p>
          <div className="attorneyFacts">
            <div><strong>1987</strong><span>Attorney since</span></div>
            <div><strong>UCLA</strong><span>Education</span></div>
            <div><strong>IE</strong><span>Deep local roots</span></div>
          </div>
        </Reveal>
      </section>

      <section className="section reviewsSection" id="reviews">
        <Reveal className="sectionHeading reviewsHeading">
          <p className="eyebrow darkEyebrow">Client experience</p>
          <h2>Proof should feel human.</h2>
          <p>Recent client feedback consistently highlights communication, responsiveness and a process that feels easier to understand.</p>
        </Reveal>

        <div className="reviewsGrid">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08} className="reviewCard">
              <div className="stars" aria-label="5 stars">★★★★★</div>
              <blockquote>“{review.quote}”</blockquote>
              <div className="reviewMeta"><strong>{review.name}</strong><span>Google Review</span></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="locationSection" id="locations">
        <Reveal className="locationHeading">
          <p className="eyebrow">Two Inland Empire offices</p>
          <h2>Close when you need us.<br />Available when it matters.</h2>
        </Reveal>
        <div className="locationGrid">
          {locations.map((location, index) => (
            <Reveal key={location.city} delay={index * 0.08} className="locationCard">
              <span>{location.label}</span>
              <h3>{location.city}</h3>
              <p>{location.address}</p>
              <a href={`tel:${location.phone.replace(/\D/g, "")}`}>{location.phone} <Arrow /></a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="consultationSection" id="consultation">
        <Reveal className="consultationCopy">
          <p className="eyebrow darkEyebrow">Free consultation</p>
          <h2>Tell us what happened.</h2>
          <p>No pressure. No legal maze. Start with the basic details and the firm can follow up about the next step.</p>
          <a className="phoneBig" href="tel:+19093807200">(909) 380-7200</a>
        </Reveal>

        <Reveal className="caseForm" delay={0.1}>
          <div className="fieldRow">
            <label>Full name<input type="text" placeholder="Your name" /></label>
            <label>Phone<input type="tel" placeholder="(555) 555-5555" /></label>
          </div>
          <div className="fieldRow">
            <label>Email<input type="email" placeholder="you@email.com" /></label>
            <label>Date of accident<input type="text" placeholder="MM / DD / YYYY" /></label>
          </div>
          <label>What happened?<textarea rows={5} placeholder="Share a few details about your situation" /></label>
          <label className="consent"><input type="checkbox" /> <span>I agree to be contacted about my inquiry. Message and data rates may apply.</span></label>
          <button className="button buttonPrimary formButton" type="button">Request My Free Review <Arrow /></button>
          <small>Prototype form. Final build will use the firm-approved intake and SMS consent language.</small>
        </Reveal>
      </section>

      <footer>
        <div className="footerBrand">
          <span className="brandMark">KL</span>
          <div><strong>Krasney Law</strong><span>Accident Attorneys</span></div>
        </div>
        <div className="footerLinks">
          <a href="#practice">Practice Areas</a>
          <a href="#firm">Our Firm</a>
          <a href="#locations">Locations</a>
          <a href="#consultation">Contact</a>
        </div>
        <p>© 2026 Krasney Law. Concept redesign for presentation purposes.</p>
      </footer>
    </main>
  );
}
