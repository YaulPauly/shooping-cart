import { useId } from 'react';
import './../styles/Cart.css'
import { CartIcon, ClearCartIcon } from './Icons';
import useCart from '../hooks/useCart';
import { ICart } from '../Interface';
import CartItem from './CartItem';

const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, clearProduct, addProduct } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {
                        cart.map((product: ICart) => (
                            <CartItem 
                                key={product.id}
                                addProduct={() => addProduct(product)}
                                {...product}
                            />
                        ))
                    }

                </ul>

                <button onClick={() => clearProduct()}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>);
}

export default Cart;