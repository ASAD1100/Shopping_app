import React, { createContext } from 'react'
import all_product from "../../components/assets/all_product"

//THis context file is used to send the props / context to all the components without defining them in each component call i.e., without using <Component {props} />
export const ShopContext =createContext(null);

const ShopContextProvider=(props)=>{

    const contextValue = {all_product}

    return (
        <ShopContext.Provider value={contextValue}>

            {props.children}            
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
