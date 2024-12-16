import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme } = useTheme(); // Removed toggleTheme
  const twitterIcon = twitterLight;
  const githubIcon = githubLight;
  const linkedinIcon = linkedinLight;
  

  return (
    <section id="hero" className={styles.container}>
      <img
        src={heroImg}
        className={styles.hero}
        alt="Profile picture of Nikhil Nooli"
      />
      <div className={styles.info}>
        <h1>
          Nikhil
          <br />
          Nooli
        </h1>
        <h2>Computer Engineer</h2>
        <span>
          <a href="https://twitter.com/nikhilrnooli" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/nikhilrnooli" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/nikhil-nooli/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern full stack web applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
