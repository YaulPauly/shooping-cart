import { Products } from "./components/Products"
import { products as initialProducts } from './mocks/products.json'
import { IProducts } from "./Interface"
import { Header } from "./components/Header"
import useFilters from "./hooks/useFilters"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import { CartProvider } from "./context/CartContext"

function App() {

  const {filterProducts} = useFilters();
  const filteredProducts: IProducts[] = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
