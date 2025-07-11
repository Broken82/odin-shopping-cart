import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar({itemCount}){

    return(
        <header className={styles.header}>
            <Link to="/">
                <p>AllShop</p>
            </Link>
            <div className={styles['link-group']}>
                <Link to="/cart"><p>Cart({itemCount() || 0})</p></Link>
            </div>

        </header>
    )
    
}