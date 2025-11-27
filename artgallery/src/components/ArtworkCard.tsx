import styles from './ArtworkCard.module.css'

export interface Artwork {
    name: string
    author: string
    image: string
    comment: string
}

const ArtworkCard = ({ name, author, image, comment }: Artwork) => {
    return (
        <div className={styles.artworkCard}> 
            <img src={image} alt={name} className={styles.artworkImage} />
            <div className={styles.textContainer}>
                <h2 className={styles.artworkName}>{name}</h2>
                <h3 className={styles.artworkAuthor}>by {author}</h3>
                <p className={styles.artworkComment}>"{comment}"</p>
            </div>
        </div>
    )
}

export default ArtworkCard;