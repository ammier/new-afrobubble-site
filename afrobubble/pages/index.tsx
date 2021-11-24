import React from "react";
import Head from "next/head";
// import Link from "next/link";
import Navigation from "../components/Navigation";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import Accordion from "../components/Accordion";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface indexProps { }

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const navList: { initial: any; animate: any } = {
  initial: {
    x: 0,
  },
  animate: {
    x: 0,
    delay: 1.8,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.08,
      staggerDirection: 1,
    },
  },
};

const navItem: { initial: any; animate: any } = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { ...transition },
  },
};

const index: React.FC<indexProps> = ({ }) => {
  let [carouselIndex, setCarouselIndex] = React.useState<number>(0);
  const [carouselStyle, setCarouselStyle] = React.useState<string>(``);

  function handleCarouselSlide(btnType: string) {
    if (btnType === "right") {
      if (carouselIndex < 3) {
        carouselIndex += 1;
        setCarouselIndex(carouselIndex);
        setCarouselStyle(`carousel-right-active-${carouselIndex}`);
      }
    }
    if (btnType === "left") {
      if (carouselIndex > 0) {
        carouselIndex -= 1;
        setCarouselIndex(carouselIndex);
        setCarouselStyle(`carousel-left-active-${carouselIndex}`);
      }
    }
  }

  return (
    <>
      <Head>
        <title>Afrobubble &mdash; 10,000 years into the future.</title>
        <link rel="icon" href="svg/favicon.svg" />
      </Head>
      <motion.div initial="initial" animate="animate" className="container">
        <Navigation />
        <header className="home-header">
          <motion.div variants={navList} className="hero-left">
            <motion.h3 variants={navItem}>Afrobubble Kingdom</motion.h3>
            <motion.h1 variants={navItem}>
              10,000 YEARS
              <br /> INTO THE FUTURE
            </motion.h1>
            <motion.h4 variants={navItem}>
              Queen Amina & 5,499 bubs have survived the scourge of the earth
              "The Machenda" and she must lead her people in a clime of
              limited resources
            </motion.h4>
            <motion.a
              initial={{ opacity: 0, x: 50, display: "inline-block" }}
              animate={{ x: 0, opacity: 1, transition: { delay: 1.5 } }}
              href="https://discord.gg/afrobubble"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Discord
            </motion.a>
          </motion.div>
          <div className="hero-right">
            {/* <img className="amina" src="webp/amina.webp" alt="amina" /> */}
            <motion.img
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { ...transition, delay: 1.5 },
              }}
              className="amina"
              src="webp/amina.gif"
              alt="amina"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, display: "inline-block" }}
            animate={{ opacity: 1, transition: { delay: 1.5 } }}
            className="socials"
          >
            <a href="https://www.instagram.com/afrobubble.io/" target="_blank" rel="noopener noreferrer">
              <img src="svg/instagram.svg" alt="instagram" />
            </a>
            <a href="https://discord.gg/afrobubble" target="_blank" rel="noopener noreferrer">
              <img src="svg/discord.svg" alt="discord" />
            </a>
            <a href="https://twitter.com/afrobubble" target="_blank" rel="noopener noreferrer">
              <img src="svg/twitter.svg" alt="twitter" />
            </a>
          </motion.div>
        </header>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4 } }}
          id="storySection"
          className="section-story"
        >
          <div className="box-left">
            {/* <img
              className="placeholder"
              src="webp/about-vid.webp"
              alt="video"
            /> */}
            <iframe
              width="100%"
              height="380"
              src="https://www.youtube.com/embed/UPe6-eAPDLk"
            ></iframe>
            {/* <img className="play" src="svg/play.svg" alt="play" /> */}
          </div>
          <div className="box-right">
            <h2>
              AFTER THE MACHENDA OCCURED, A PROPHECY WAS REVEALED. THAT ONE BUB,
              WILL RISE FROM THE ASHES TO UNITE THE 9 CLANS
            </h2>
            <p>
              This is the story of the warrior queen and how she will face
              trials, war hungry & power thirsty clan chiefs who will use the
              slightest opportunity to ursurp her throne, How will she lead as
              she waits for the prohecy of the last bub?
            </p>
            <a href="https://bit.ly/afrobubble2" target="_blank" rel="noopener noreferrer">
              Whitepaper
            </a>
          </div>
        </motion.section>

        <section id="missionSection" className="section-mission">
          <h1>OUR MISSION</h1>
          <p>
            Simply, to create a world of 5,499 bubs where our community will
            fight for survival & power, in the process rising through the ranks
            and increasing rarity

          </p>
          <div className="box">
            <div className="box__content">
              <h2>OUR MISSION IN TRAITS</h2>
              <p>
                The Afrobubble collection of 5,400 constitutes of a Queen,
                9 clan chiefs and 5,490 bubs in different hierarchy of the kingdom.
                The collection is made up of 600 bubs from the nine (9) clans, with
                over 460 traits.
              </p>
            </div>
            <div className="box__content">
              <h2>BENEFITS</h2>
              <p>
                Bub holders will be eligible for airdrops from unique Afrocentric
                Artist collection which we will on-board via the Afrobubble launchpad.
                Also, bub holders have access to discounts and deals on tourist attraction
                sites and hotels when visiting certain countries within Africa. These
                benefits among others will be available to Bub holders.
              </p>
            </div>
          </div>
          <h2>CITIZENSHIP FEE: 0.28</h2>
        </section>

        <section id="roadmapSection" className="section-roadmap">
          <h1>ROADMAP</h1>
          <p>
            Its 10,000 AD and the scourge of earth, "The Machenda" has led to
            many millennia of darkness in the afrobubble kingdom. Amongst a sea
            of creatures, most distinguishable from one another. Queen Amina, the
            Queen of Queens, the Queen of Kings, the one that does not start but
            ends !War must lead and defend her crown until the prophecy of the
            last Bub is fulfilled. As dugs turned into gears, basked stronger,
            and mightier than any in all the 9 realms. All hail the arrival of
            The Queen Amina!!!
          </p>
          <div className="carousel">
            <div className="carousel__controls">
              <img
                onClick={() => handleCarouselSlide("left")}
                src="svg/chevron.svg"
                alt="chevron left"
                className="chevron-left"
              />
              <div className="line">&nbsp;</div>
              <img
                onClick={() => handleCarouselSlide("right")}
                src="svg/chevron.svg"
                alt="chevron right"
                className="chevron-right"
              />
            </div>
            <div className="carousel__slides">
              <div className={`carousel__slides--content ${carouselStyle}`}>
                <div className="carousel__slide">
                  <h2>October-2021</h2>
                  <h3>PRESALE</h3>
                  <p>
                    1,008 Bubs has been minted. Of this 1,008 bubs,
                    250 Bubs were distributed to loyal Bubs in the Afrobubble kingdom.
                    Join our discord channel for more details.
                  </p>
                </div>
                <div className="carousel__slide">
                  <h2>November-2021</h2>
                  <h3>PUBLIC MINT</h3>
                  <p>
                    The public mint date is 20th November 2021. When you mint a Bub
                    and more, you stand a chance to win an all expense paid trip to the
                    Kenya Safari/ Rwanda and other gift items including a VR headset and
                    hardware ledger. Upon completion of the mint, the Bubs will be listed
                    on the secondary marketplace (Magic Eden & FTX US).
                  </p>
                </div>
                <div className="carousel__slide">
                  <h2>Q4-2021</h2>
                  <h3>UTILITY & PARTNERSHIPS</h3>
                  <p>
                    Afrobubble will partner with tourism companies, Museums and National
                    Parks within the African continent to enable Bub holders get discounted
                    deals on holiday packages across various tourist locations in Africa.
                    This will help facilitate Afrobubs meet ups and deepen physical community
                    engagement/ interactions. Bub holders will get a chance to participate in
                    the presale of upcoming Afrocentric NFT projects on our launchpad.
                  </p>
                </div>
                <div className="carousel__slide">
                  <h2>Q1-2022</h2>
                  <h3>AFROBUBBLE LAUNCHPAD</h3>
                  <p>
                    The AfroBubble NFT Launchpad will be dedicated to enable afro-inspired
                    artist launch their projects. Existing AfroBub holders will have first
                    time access to the projects launching on the Afrobubble launchpad. The
                    approach will be in a lottery format that enables 1 to 1,000 lucky afro
                    bub holders get a front row seat at every exclusive mint.
                  </p>
                </div>
                <div className="carousel__slide">
                  <h2>Q1-2022</h2>
                  <h3></h3>
                  <p>
                    An Afrobubble secondary marketplace for all existing afro-inspired
                    art projects including those onboarded via our launchpad. When unveiling
                    the secondary marketplace, we will also unveil the last Bub missing during
                    the 5,400 initial drop. The last Bub will reveal the plans for the future
                    of the Afrobubble kingdom.
                  </p>
                </div>
                <div className="carousel__slide">
                  <h2>Q2-2022</h2>
                  <h3>AFROBUBBLE TOKEN LAUNCH</h3>
                  <p>
                    Afrobubble platform token (AfroB) will be launched. AfroB will be
                    the utility token that powers the Afrobubble platform.
                    The AfroB Token will be airdropped to all existing Bub holders.
                    This token will be the vote and governance token which will drive
                    the decision making and future of the Afrobubble ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="teamSection" className="section-team">
          <h1>TEAM</h1>
          <div className="box-wrapper">
            <div className="box">
              <img src="webp/team-1.webp" alt="team" />
              <p>@VENNOPUTA</p>
              <h2>Venn The Wizard</h2>
              <p>MERLIN</p>
            </div>
            <div className="box">
              <img src="webp/team-2.webp" alt="team" />
              <p>@THE.MIND.OF.FIZZ</p>
              <h2>Fizz the Doodler</h2>
              <p>Art & Design</p>
            </div>
            <div className="box">
              <img src="webp/team-3.webp" alt="team" />
              <p>@GEM_CASA</p>
              <h2>Gem the Minister</h2>
              <p>Project Management</p>
            </div>
            <div className="box">
              <img src="webp/team-4.webp" alt="team" />
              <p>@AMMIER_TM</p>
              <h2>Toye the Mechanic</h2>
              <p>Developer</p>
            </div>
            <div className="box">
              <img src="webp/james.webp" alt="team" />
              <p>@JAMIEBLACKJACK</p>
              <h2>James the Director</h2>
              <p></p>
            </div>
            <div className="box">
              <img src="webp/Josh.webp" alt="team" />
              <p>@WOODS0513</p>
              <h2>Josh the Jester</h2>
              <p></p>
            </div>
            <div className="box">
              <img src="webp/Ak CASA.webp" alt="team" />
              <p>@AKCASA</p>
              <h2>AK</h2>
              <p></p>
            </div>
            <div className="box">
              <img src="webp/Radiant-4.webp" alt="team" />
              <p>@FRONTH4TH</p>
              <h2>Radiant</h2>
              <p>Community Lead</p>
            </div>
            <div className="box">
              <img src="" alt="team" />
              <p>@UMANA_ANDY_</p>
              <h2>The Go 2 Guy</h2>
              <p>Advisor</p>
            </div>
          </div>
        </section>

        <section id="faqsSection" className="section-faqs">
          <h1>FAQs</h1>
          <Accordion question="How can I buy a Bub?">
            Bubs can be purchased on our website. Simply connect your phantom
            wallet and you’d be able to mint on November 20th, 2021.
          </Accordion>
          <Accordion question="When is the drop & what’s the mint fee?">
            The public launch is 20th of NOV (8PM UTC/ 3PM EST).
            The citizenship fee is 0.845 SOL.
          </Accordion>
          <Accordion question="Will there be a secondary market?">
            Yes, the Bubs will be listed on Magic Eden and FTX US.
          </Accordion>
          <Accordion question="What is the total number of Bubs?">
            The total number of Bubs is 5,400.
          </Accordion>
          <Accordion question="Is there a rarity System?">
            Yes, there is a rarity system. Upon closure of mint,
            the rarity chart will be unveiled.
          </Accordion>
          <Accordion question="Will there be a Pre-sale?">
            Yes we had a pre-sale in October where 1,008 bubs were minted.
          </Accordion>
          <Accordion question="Will there be a community fund?">
            yes, 15% of royalties are allocated to building the community
            and clan DAO's and tournaments.
          </Accordion>
          <Accordion question="Are there secondary sale royalties?">
            Yes, for ever Bub sold in the secondary market, the royalty is pegged at 4.5%
          </Accordion>
        </section>
        <footer className="footer">
          <p>Copyright © 2021, From the coolest team at Afrobubble kingdom</p>
          <p>All rights reserved 2021</p>
          <p>Terms of Service</p>
          <div className="socials">
            <a href="https://www.instagram.com/afrobubble.io/" target="_blank" rel="noopener noreferrer">
              <img src="svg/instagram.svg" alt="instagram" />
            </a>
            <a href="https://discord.gg/afrobubble" target="_blank" rel="noopener noreferrer">
              <img src="svg/discord.svg" alt="discord" />
            </a>
            <a href="https://twitter.com/afrobubble" target="_blank" rel="noopener noreferrer">
              <img src="svg/twitter.svg" alt="twitter" />
            </a>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default index;
