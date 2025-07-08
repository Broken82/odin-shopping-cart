import styles from './card.module.css'

export default function Card(){
    return(
    <div className={styles.card}>
        
        <img src="" alt="Item" />
        <p className="price">$10</p>
        <p className="name">Laptop</p>
        <div className={styles['input-group']}>
            <button>-</button>
            <input type="number" />
            <button>+</button>
        </div>
        
    </div>
    )

}