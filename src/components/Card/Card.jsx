import { useOutletContext } from 'react-router-dom'
import styles from './card.module.css'
import { useState } from 'react'

export default function Card(){


    const [items, setItems] = useOutletContext()
    const [quantity, setQuantity] = useState({})

    const handleIncrement = (id) => {
        const newQuantity = {
            ...quantity,
            [id]: (quantity[id] || 0) + 1
        }

        setQuantity(newQuantity)
    }

    const handleDecrement = (id) => {
        const newQuantity = {
            ...quantity,
            [id]: (quantity[id] - 1 >= 0 ? quantity[id] - 1 : quantity[id] = 0)
        }

        setQuantity(newQuantity)
    }

    const handleAdd = (id) => {
        const newItems = [...items]
        newItems[id - 1].quantity += (quantity[id] || 0)

        const newQuantity = {
            ...quantity,
            [id] : 0
        }


        setItems(newItems)
        setQuantity(newQuantity)
    }
    
    console.log(items)


    return(


    
        
        
    <div className={styles['card-wrapper']}>

        {items.map(item => {
            return(
                <div key={item.id} className={styles.card}>
        
             <img src={item.image} alt="Item" /> 
            <p className={styles.price}>${item.price}</p>
            <p className={styles.name}>{item.title}</p>
            <div className={styles['input-group']}>
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <input type="number" value={quantity[item.id] || 0} />
                <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <button onClick={() => handleAdd(item.id)}>Add</button>
    
        </div>

            )

        })}

    </div>

        )
       

}