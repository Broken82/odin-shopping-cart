import styles from './navbar.module.css'

export default function Navbar(){

    return(
        <header className={styles.header}>
            <p>AllShop</p>
            <div className={styles['link-group']}>
                <p>Items</p>
                <p>Cart</p>
            </div>

        </header>
    )
    
}