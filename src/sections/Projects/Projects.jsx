import styles from './ProjectsStyles.module.css';
import Ecommerce from '../../assets/Ecommerce.png';
import Library from '../../assets/Library.jpg';
// import Paytm from '../../assets/Paytm.png';
import Cyber from '../../assets/Cyber.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Ecommerce}
          link="https://github.com/nikhilrnooli/cybershop"
          h3="CyberShop"
          p="Ecommerce Website"
        />
        <ProjectCard
          src={Library}
          link="https://github.com/nikhilrnooli/library-website"
          h3="BookLoom"
          p="Library Catalogue Website"
        />
        {/* <ProjectCard
          src={Paytm}
          link="https://github.com/nikhil-nooli/paytm"
          h3="Paytm Clone"
          p="Digital Payments"
        /> */}
        <ProjectCard
          src={Cyber}
          link="https://github.com/nikhilrnooli/safemax_app"
          h3="Safemax"
          p="CyberSecurity Website"
        />
      </div>
    </section>
  );
}

export default Projects;
