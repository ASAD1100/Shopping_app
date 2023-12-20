import React, { createContext, useState } from 'react'
import all_product from "../../components/assets/all_product"

//THis context file is used to send the props / context to all the components without defining them in each component call i.e., without using <Component {props} />
export const ShopContext =createContext(null);

const getDefaultCart=()=>{
        let cart ={};
        for(let i=0;i<all_product.length+1 ;i++){
            cart[i]=0;

        }
        return cart;
    }
const ShopContextProvider=(props)=>{
    const [cartItem, setCartItems]=useState(getDefaultCart());
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>
        ({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItem);
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>
        ({...prev,[itemId]:prev[itemId]-1}))

    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem)
        {
            if (cartItem[item]>0)
            {
                let itemInfo= all_product.find((product)=>product.id===Number(item))
                totalAmount+=itemInfo.price*cartItem[item];
            }
            return totalAmount;
        }
    }

    const getTotalCartItems=()=>{
        let totalItem=0;
        for( const item in cartItem)
        {
            if (cartItem[item]>0)
            {
                totalItem+=cartItem[item];


            }
        }
        return totalItem;
    }

    const contextValue = {all_product, cartItem, addToCart, removeFromCart,getTotalCartAmount,getTotalCartItems};

   
    

    return (
        <ShopContext.Provider value={contextValue}>

            {props.children}            
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
