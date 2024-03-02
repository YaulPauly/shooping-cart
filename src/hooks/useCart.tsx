import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCart = () => {

    const contextCart = useContext(CartContext);

    if(contextCart === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return contextCart;
}
 
export default useCart;