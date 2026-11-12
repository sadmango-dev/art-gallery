import Carousel from './components/Carousel';
import styles from './App.module.css';

const HOME_URL = 'https://www.katyaleksina.me/'

function goBack() {
  const cameFromSomewhere = document.referrer !== '' && window.history.length > 1

  if (cameFromSomewhere) {
    window.history.back()
  } else {
    window.location.href = HOME_URL
  }
}

function App() {

  return (
    <div className={styles.appContainer}>
      <button className={styles.backButton} onClick={goBack}>← Back to Katya's website</button>
      <div className={styles.carouselContainer}>
      <Carousel />
      </div>
    </div>
  )
}

export default App
