import { IProducts, IProductsItem } from "../Interface";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import './../styles/ProductItem.css'

const ProductItem: React.FC<IProductsItem> = ({ products, addProduct, removeFromCart, checkProductInCart }) => {
    return (
        <div className='products'>
            <ul>
                {
                    products.slice(0, 10).map((product: IProducts) => {
                        const isProductInCart = checkProductInCart(product)

                        return (
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button
                                        style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                                        onClick={() => { isProductInCart ? removeFromCart(product) : addProduct(product) }}>
                                        {
                                            isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default ProductItem;