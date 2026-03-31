import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product';

// ✅ FIX 1: Capitalize (match import)
export const ShopContext = createContext(null);

// ✅ FIX 2: Capitalize component
const ShopContextProvider = (props) => {

    const contextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

// ✅ FIX 3: Export default
export default ShopContextProvider;