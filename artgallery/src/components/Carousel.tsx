import { type Artwork } from './ArtworkCard'
import ArtworkCard from './ArtworkCard'
import wandererImage from '../assets/wanderer.jpeg'
import starryNightImage from '../assets/starry_night.jpeg'
import girlWithPearlEarring from '../assets/pearlgirl.jpeg'
import goldenGate from '../assets/goldengate.jpeg'
import {useState} from 'react'
import styles from './Carousel.module.css'

const ImageList : Artwork[] = [
    {
        name: 'Wanderer above the Sea of Fog',
        author: 'Caspar David Friedrich',
        image: wandererImage,
        comment: 'This painting fills me with hope and faith in the Good.'
    },
    {
        name: 'Starry Night',
        author: 'Vincent van Gogh',
        image: starryNightImage,
        comment: 'All the beautiful European nights encapsulated in one painting.'
    },
    {
        name: 'Girl with a Pearl Earring',
        author: 'Johannes Vermeer',
        image: girlWithPearlEarring,
        comment: 'Her face is kind. I feel like she gets me.'
    },
    {
        name: 'Golden Gate',
        author: 'Charles Sheeler',
        image: goldenGate,
        comment: 'I miss San Francisco.'
    }
]

const Carousel = () => {
    const [index, setIndex] = useState(0);

    const goToNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % ImageList.length)
    }

    const goToPrev = () => {
        setIndex((prevIndex) => 
            prevIndex === 0 ? ImageList.length - 1 : prevIndex - 1
        )
    }

    const getItemAtPosition = (offset: number) => {
        const trueIndex = (index + offset + ImageList.length) % ImageList.length
        return ImageList[trueIndex]
    }


    return (
        <div className={styles.carouselContainer}>
            <button onClick={goToPrev} className={styles.navButton}>
                ←
            </button>

            <div className={styles.carouselItems}>
                {/* Left item (faded) */}
                <div className={styles.fadedItem}>
                    <ArtworkCard {...getItemAtPosition(-1)} />
                </div>

                {/* Center item (focused) */}
                <div className={styles.focusedItem}>
                    <ArtworkCard {...getItemAtPosition(0)} />
                </div>

                {/* Right item (faded) */}
                <div className={styles.fadedItem}>
                    <ArtworkCard {...getItemAtPosition(1)} />
                </div>
            </div>
            <button onClick={goToNext} className={styles.navButton}>
                →
            </button>
        </div>
    )
}

export default Carousel;