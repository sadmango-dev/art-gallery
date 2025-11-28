import Carousel from './components/Carousel';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.appContainer}>
      <button className={styles.backButton} onClick={() => window.location.href = 'https://www.katyaleksina.me/'}>← Back to Katya's website</button>
      <div className={styles.carouselContainer}>
      <Carousel />
      </div>
    </div>
  )
}

export default App
