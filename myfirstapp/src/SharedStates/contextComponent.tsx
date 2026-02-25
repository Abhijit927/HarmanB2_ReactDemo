import { createContext } from "react";

 export let CartContext = createContext({
    cartItems: [ ],
    addToCart: (item:any) => {},});


export let ProductContext = createContext({
    products: [],
    addProduct: (product:any) => {}});


