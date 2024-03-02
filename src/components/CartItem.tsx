import { ICartItem } from "../Interface";

const CartItem: React.FC<ICartItem> = ({ thumbnail, title, price, quantity, addProduct }) => {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - {price}
            </div>
            <footer>
                <small>
                    quantity: {quantity}
                </small>
                <button onClick={addProduct}>+</button>
            </footer>
        </li>
    );
}

export default CartItem;