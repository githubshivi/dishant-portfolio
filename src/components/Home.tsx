import { Link } from "react-router-dom";
import "./Home.css";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Skills from "./Skills";
const Home = () => {
  const handleClick = () => {
    window.location.href = "mailto:dishantrajput110@gmail.com";
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Dishant</h1>
          <p>
            Elevate Your Brand with Stunning Visuals
            <br />
            Expert Video Editing for Captivating Content
          </p>
          <a href="#portfolio" className="cta-button">
            View My Work
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me">
        <h2>About Me</h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          A dedicated video editor with a knack for transforming footage into
          engaging visual content. My expertise spans across Adobe Premiere Pro,
          After Effects, and Photoshop, enabling me to deliver high-quality,
          impactful videos. With Premiere Pro, I meticulously edit and arrange
          your footage. After Effects allows me to inject creativity through
          animations and effects, while Photoshop helps in perfecting every
          visual element. From promotional videos to creative projects, I’m
          committed to bringing your ideas to life with a professional touch.
          Let’s make your vision a reality—reach out and let’s get started!
        </motion.p>
      </section>

      {/* Showcase Section */}
      <section className="showcase" id="portfolio">
        <h2>Featured Projects</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <a
              href="https://www.youtube.com/watch?v=nfZz3APFqsU"
              target="_blank"
            >
              <img src="/assets/Youtube.png" alt="Project 1" />
              <p>Youtube Work</p>
            </a>
          </div>

          <div className="showcase-item">
            <Link to="/brand-campaign">
              <img src="/assets/BRAND.png" alt="Project 1" />
              <p>Brand Campaign RUN&GO</p>
            </Link>
          </div>

          <div className="showcase-item">
            <Link to="/logos">
              <img src="/assets/LOGOS.png" alt="Project 2" />
              <p>Logo's</p>
            </Link>
          </div>

          <div className="showcase-item">
            <Link to="/posters">
              <img src="/assets/Posters.png" alt="Project 3" />
              <p>Poster's</p>
            </Link>
          </div>

          <div className="showcase-item">
            <Link to="/videos">
              <img src="/assets/Video.png" alt="Project 3" />
              <p>Videos</p>
            </Link>
          </div>

          <div className="showcase-item">
            <Link to="/product-advertisement">
              <img src="/assets/Product.png" alt="Project 3" />
              <p>Product Advertisement</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <Skills />
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaboration or inquiries.</p>
        <div>
          <a
            className="btn"
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGF_ezvmOIj4QAAAZHR1fYQU4iTeuWinW7FKxGaeE6L0uVK2qyLAArtW4-gRit0I_SHpyC2W1aSITVAW0hyoZYSaJru2set0NylVAakIkrVNFVezn8cTOwJdbOnidcH_89S718=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fdishant-rajput-63588929a%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
            target="_blank"
          >
            <FaLinkedin />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <button className="btn" onClick={handleClick}>
            <HiOutlineMail />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
