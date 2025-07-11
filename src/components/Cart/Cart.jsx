import { useOutletContext } from 'react-router-dom'
import styles from './cart.module.css'

export default function Cart(){
    const [items, setItems] = useOutletContext()

    const getFilteredData = () => {
        return items.filter((item) => item.quantity > 0)
    }

    const getTotalSum = () => {
        const filteredArr = getFilteredData()
        let sum = 0

        filteredArr.forEach(item => sum += item.quantity * item.price)
        return sum.toFixed(2)
    }

    const handleChange = (e, id) => {
        const newItems = [...items]
        newItems[id-1].quantity = e.target.valueAsNumber || 0

        setItems(newItems)
    }


    return(
        <div className={styles.cart}>
            <div className={styles['cart-list']}>

                {getFilteredData().map(item =>{
                    return(
                <div key={item.id} className={styles['cart-item']}>
                    <img className={styles['img-cart']} src={item.image} alt={item.title} />
                    <div className={styles.namebox}>
                        <p className={styles.title}>{item.title}</p>
                    </div>
                    <p className={styles.price}>${item.price}</p>
                    <input type="number" onChange={(e) => handleChange(e, item.id)} value={item.quantity} />
                </div>

                    )
                })}



            </div>
            <div className={styles.checkout}>
                <p>Sum: ${getTotalSum()}</p>
            </div>
        </div>

    )
}