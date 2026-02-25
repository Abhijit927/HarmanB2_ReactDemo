import { Cart2ProductComponent } from "../Cart2ProductComponent/Cart2ProductComponent";
import { Component } from "react";

export let Cart2Component  = () => {
 let products = [
    {
      id: 1,
      photoUrl:
        "https://images.unsplash.com/photo-1592286927505-1def25115558?w=500&h=600&fit=crop",
      name: "iPhone 14 Pro Max",
      price: 1099.99,
      quantity: 2,
    },
    {
      id: 2,
      photoUrl:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=600&fit=crop",
      name: "MacBook Air M2",
      price: 1199.99,
      quantity: 1,
    },
    {
      id: 3,
      photoUrl:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop",
      name: "Apple Watch Series 8",
      price: 399.99,
      quantity: 1,
    },
    {
      id: 4,
      photoUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=600&fit=crop",
      name: "AirPods Pro",
      price: 249.99,
      quantity: 3,
    },
    {
      id: 5,
      photoUrl:
        "https://images.unsplash.com/photo-1526408529357-567c2c0161b8?w=500&h=600&fit=crop",
      name: "iPad Pro 12.9-inch",
      price: 1099.99,
      quantity: 1,
    },
    {
      id: 6,
      photoUrl:
        "https://images.unsplash.com/photo-1519915212116-7cfef70e2366?w=500&h=600&fit=crop",
      name: "AirTag",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 7,
      photoUrl:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop",
      name: "Apple TV 4K",
      price: 179.99,
      quantity: 2,
    },
  ];
 
  return(
    <div className="container-fluid">
        <h4 className="text-center mt-2 mb-2 border border-default p-1 bg-dark text-white">Shopping Cart.</h4>
        <div className="row mb-3">
            {products.map((products) => {
           return  <Cart2ProductComponent key={products.id} product={products} >
            <button className="btn btn-primary"> Buy Now </button>
           </Cart2ProductComponent>
            })}
        </div>
    </div>
  )
}