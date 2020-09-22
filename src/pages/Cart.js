import React, {useContext} from "react"
import CartItem from "../components/CartItem"

import {Context} from "../Context"

function Cart() {
    const {cartItems} = useContext(Context)
const totalCost = 5.99 * cartItems.length
const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay} </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>    
        </main>
    )
}

export default Cart