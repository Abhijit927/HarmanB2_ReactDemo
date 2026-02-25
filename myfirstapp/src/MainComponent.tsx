
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoggingComponentTemplate } from "./Logging/LoggingComponent";
import { Component } from "react";
import { Reactions } from "./App";
import { ProductComponent } from "./Product/ProductComponent";
import { Greetings } from "./ForPropTypes/greetingsComponent";
import { AuthRoute } from "./AuthRouteComponent/AuthRouterComponent";
import { CartComponent } from "./CartComponent/CartComponent";
import { Cart2Component } from "./cart2Component/Cart2Component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export let MainComponentTemplate = () =>{

    return(
        <BrowserRouter>
        <Routes>
        <Route path="/reactions" element={<Reactions title="My Reactions Component"  showLikes={true}  showDislikes={true} showLove={true} />} />
        <Route path="/products/details" element={
            <AuthRoute isAuthenticated={true}>
                <ProductComponent  title="My Product Component" name="iPhone 14 Pro Max" price={1099}  quantity={0}  imageUrl="./src/logo.svg" />
            </AuthRoute>
            } />
        <Route path="/logging"  element={<LoggingComponentTemplate title="My Logging Component" />} />
        <Route path="/dashboard" element={<Greetings name="Abhi Dorge" isEmployee={true}   age={30} />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/cart" element={<CartComponent/>} />
        <Route path="/cart2" element={<Cart2Component/>}/>
        </Routes>
        </BrowserRouter>
    )
}