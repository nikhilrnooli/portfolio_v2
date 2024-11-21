import styles from './ContactStyles.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <div className="contactDetails">
        <p className="contactItem">

        <strong>Email:</strong> {' '}
         <a href="mailto:yourname@example.com">nikhilrnooli@gmail.com</a>
        </p><br />
        <p className="contactItem"> 
          <strong>Location:</strong> Mumbai,Maharashtra
        </p>
      </div>
    </section>
  );
}

export default Contact;