import { useContext } from "react";
import { CartContext, ProductContext } from "../SharedStates/contextComponent";
// import './CartComponent.css';



export let CartComponent = () => {
    let cartContext = useContext(CartContext);
    let productContext =  useContext(ProductContext);
    return(
        <div className="cart-container">        
            <h2 className="cart-title">Your Shopping Cart</h2>
            <p className="cart-message">Your cart is currently empty.</p>
        </div>
    )
}