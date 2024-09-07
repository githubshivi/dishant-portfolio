import { Link } from "react-router-dom";
import "./Home.css";
import Skills from "./Skills";
const Home = () => {
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
        <p>
          A dedicated video editor with a knack for transforming footage into
          engaging visual content. My expertise spans across Adobe Premiere Pro,
          After Effects, and Photoshop, enabling me to deliver high-quality,
          impactful videos. With Premiere Pro, I meticulously edit and arrange
          your footage. After Effects allows me to inject creativity through
          animations and effects, while Photoshop helps in perfecting every
          visual element. From promotional videos to creative projects, I’m
          committed to bringing your ideas to life with a professional touch.
          Let’s make your vision a reality—reach out and let’s get started!
        </p>
      </section>

      {/* Showcase Section */}
      <section className="showcase">
        <h2>Featured Projects</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <Link to="/brand-campaign">
              <img
                src="/assets/brand_campaign/8 . Banner.jpg"
                alt="Project 1"
              />
              <p>Brand Campaign RUN&GO</p>
            </Link>
          </div>

          <div className="showcase-item">
            <Link to="/logos">
              <img src="/assets/logos/logo.jpg" alt="Project 2" />
              <p>Logo's</p>
            </Link>
          </div>

          <div className="showcase-item">
            <Link to="/posters">
              <img src="/assets/posters/poster2.jpg" alt="Project 3" />
              <p>Poster's</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <Skills />
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for collaboration or inquiries.</p>
        <a href="#contact" className="cta-button">
          Get in Touch
        </a>
      </section>
    </div>
  );
};

export default Home;
