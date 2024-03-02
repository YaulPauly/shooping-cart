import { ReactNode, createContext, useState } from "react";
import { ICart, ICartContext, IProducts } from "../Interface";


export const CartContext = createContext<ICartContext>({
    cart: [],
    addProduct: () => {},
    removeFromCart: () => {},
    clearProduct: () => {}
});

export const CartProvider = ({children}: { children: ReactNode}) => {

    const [cart, setCart] = useState<ICart[]>([])
    const addProduct = (product: IProducts) => {

        const productInCartIndex = cart.findIndex((item: ICart) => item.id === product.id)

        if(productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            },
        ]))
    }

    const removeFromCart = (product: IProducts) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearProduct = () => {
        setCart([])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                removeFromCart,
                clearProduct
            }}
        >
            {children}
        </CartContext.Provider>
    )
}