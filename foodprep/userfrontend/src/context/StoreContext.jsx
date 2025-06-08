import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems] = useState({})

    const addToCart = (itemId)=>{
        if(!cartItems[itemId])
            setCartItems({...cartItems,[itemId]:1})
        else   
            setCartItems({...cartItems,[itemId]:cartItems[itemId]+1})
    }

    const removeFromCart =(itemId)=>{
        setCartItems({...cartItems,[itemId]:cartItems[itemId]-1})
    }

    const contextValues={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart

    }
    return(
        <StoreContext.Provider value={contextValues}> 
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;