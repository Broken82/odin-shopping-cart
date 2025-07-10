import { useOutletContext } from 'react-router-dom'
import styles from './cart.module.css'

export default function Cart(){
    const [items, setItems] = useOutletContext()
    return(
        <div className={styles.cart}>
            <div className={styles['cart-list']}>

                {items.filter(item => item.quantity > 0).map(item =>{
                    return(
                <div className={styles['cart-item']}>
                    <img className={styles['img-cart']} src={item.image} alt={item.title} />
                    <div className={styles.namebox}>
                        <p className={styles.title}>{item.title}</p>
                    </div>
                    <p className={styles.price}>${item.price}</p>
                    <input type="number" value={2} />
                </div>

                    )
                })}



            </div>
            <div className={styles.checkout}>
                <p>Sum: $100</p>
            </div>
        </div>

    )
}