import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Bienvenue ! Je suis Développeur</h1>
        <p style={styles.subtitle}>Développeur Web | Spécialiste React & Node.js</p>
        <a href="#contact" style={styles.button}>Me Contacter</a>
      </header>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>À propos de moi</h2>
        <p style={styles.text}>
          Passionné par la technologie, je suis un développeur avec une forte expertise en React et Node.js. J'aime créer des applications modernes et performantes, toujours à la recherche de nouveaux défis.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Compétences</h2>
        <ul style={styles.skillsList}>
          <li>HTML / CSS / JavaScript</li>
          <li>React / Redux</li>
          <li>Node.js / Express</li>
          <li>Git / GitHub</li>
          <li>API REST</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Projets</h2>
        <div style={styles.projectsContainer}>
          <div style={styles.projectCard}>
            <h3>Projet 1</h3>
            <p>Application de gestion de tâches avec React et Firebase.</p>
          </div>
          <div style={styles.projectCard}>
            <h3>Projet 2</h3>
            <p>Site de portfolio en React, illustrant mes projets récents.</p>
          </div>
        </div>
      </section>

      <section style={styles.section} id="contact">
        <h2 style={styles.sectionTitle}>Contact</h2>
        <p style={styles.text}>Pour toute collaboration ou question, n'hésitez pas à me contacter !</p>
        <a href="mailto:email@example.com" style={styles.emailLink}>email@example.com</a>
      </section>

      <footer style={styles.footer}>
        <p>© 2023 Mon Nom - Tous droits réservés</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f4f4f9',
  },
  header: {
    padding: '50px 0',
    backgroundColor: '#282c34',
    color: 'white',
  },
  title: {
    fontSize: '2.5em',
  },
  subtitle: {
    fontSize: '1.2em',
    margin: '10px 0 20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#61dafb',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1em',
  },
  section: {
    padding: '40px 0',
  },
  sectionTitle: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1em',
    maxWidth: '600px',
    margin: '0 auto',
  },
  skillsList: {
    listStyleType: 'none',
    padding: 0,
    fontSize: '1em',
  },
  projectsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  projectCard: {
    width: '200px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
  emailLink: {
    display: 'inline-block',
    marginTop: '10px',
    color: '#61dafb',
    textDecoration: 'none',
  },
  footer: {
    padding: '20px 0',
    backgroundColor: '#282c34',
    color: 'white',
    marginTop: '20px',
  },
};

export default App;
