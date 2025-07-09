import { useOutletContext } from 'react-router-dom'
import styles from './card.module.css'

export default function Card(){

    // eslint-disable-next-line no-unused-vars
    const [items, setItems] = useOutletContext()
 


    return(
    
        
        
    <div className={styles['card-wrapper']}>

        {items.map(item => {
            return(
                <div className={styles.card}>
        
             <img src={item.image} alt="Item" /> 
            <p className={styles.price}>${item.price}</p>
            <p className={styles.name}>{item.title}</p>
            <div className={styles['input-group']}>
                <button>-</button>
                <input type="number" />
                <button>+</button>
            </div>
    
        </div>

            )

        })}

    </div>

        )
       

}