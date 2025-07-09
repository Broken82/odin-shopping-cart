import styles from './cart.module.css'

export default function Cart(){
    return(
        <div className="cart">
            <div className="cart-list">
                <div className="cart-item">
                    <img src="" alt="Item" />
                    <p>Laptop</p>
                    <input type="number" value={2} />
                    <p>$50</p>
                </div>
            </div>
            <div className="checkout">
                <p>$100</p>
            </div>
        </div>

    )
}