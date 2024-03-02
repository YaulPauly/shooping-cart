import { IProducts, IProductsProps } from '../Interface.tsx'
import useCart from '../hooks/useCart.tsx'
import ProductItem from './ProductItem.tsx'

export const Products: React.FC<IProductsProps> = ({ products }) => {
    const { addProduct, cart, removeFromCart } = useCart()

    const checkProductInCart = (product: IProducts) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main>
            <ProductItem 
                products={products}
                addProduct={addProduct}
                removeFromCart={removeFromCart}
                checkProductInCart={checkProductInCart}
            />
        </main>
    )
}