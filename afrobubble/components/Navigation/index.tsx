import React from "react";
import Link from "next/link";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const headerTl = gsap.timeline();
    headerTl
      .from(".desktopLogo", {
        xPercent: -100,
        opacity: 0,
        stagger: 0.2,
        // ease: "power2.inOut",
      })
      .from(".nav-links * a", {
        xPercent: -30,
        opacity: 0,
        stagger: 0.2,
      })
      .from(".box-cta * a", {
        xPercent: 30,
        opacity: 0,
        stagger: 0.2,
      });

    // .from([".hero-text, .sauce, .discount, header button, .copy"], {
    //   yPercent: 50,
    //   opacity: 0,
    // });
  }, []);

  React.useEffect(() => {
    var scrollableElement = document.body;
    let scrollpos = window.scrollY;
    const nav = document.querySelector<HTMLElement>(".nav-container");

    function checkScrollDirectionIsUp(event: any) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }

    const addClassOnScroll = () => nav!.classList.add("sticky-nav");
    const removeClassOnScroll = () => nav!.classList.remove("sticky-nav");

    function checkScrollDirection(event: any) {
      scrollpos = window.scrollY;

      if (checkScrollDirectionIsUp(event) && scrollpos >= 700) {
        addClassOnScroll();
      } else {
        removeClassOnScroll();
      }
    }

    scrollableElement.addEventListener("wheel", checkScrollDirection);

    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;

      if (window.innerWidth < 600) {
        if (scrollpos >= 700) {
          addClassOnScroll();
        } else {
          removeClassOnScroll();
        }
      }
    });
  }, []);
  return (
    <nav className="nav-container">
      <div className="desktop-nav">
        <Link href="/">
          <img
            className="desktopLogo"
            src="svg/afrobubble.svg"
            alt="gift cards to naira logo"
          />
        </Link>
        <div className="nav-links">
          <div className="box">
            <a href="#storySection">Story</a>
            <a href="#roadmapSection">Roadmap</a>
            <a href="#teamSection">Team</a>
            <a href="#faqSection">FAQs</a>
          </div>
          <div className="box-cta">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Connect with Wallet
            </a>
          </div>
        </div>
      </div>

      <div className="mobile-nav">
        <Link href="/">
          <img
            className="mobileLogo"
            src="svg/afrobubble.svg"
            alt="gift cards to naira logo"
          />
        </Link>

        <div
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`nav-icon ${isNavOpen ? "nav-anim" : ""}`}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className={`mobile-nav__wrapper ${isNavOpen ? "openNav" : ""}`}>
          <a onClick={() => setIsNavOpen(!isNavOpen)} href="#storySection">Story</a>
          <a onClick={() => setIsNavOpen(!isNavOpen)} href="#roadmapSection">Roadmap</a>
          <a onClick={() => setIsNavOpen(!isNavOpen)} href="#teamSection">Team</a>
          <a onClick={() => setIsNavOpen(!isNavOpen)} href="#faqSection">FAQs</a>
        </div>
      </div>
    </nav>
  );
};

export default index;
