import { useContext } from "react"
import { IProducts } from "../Interface"
import { FiltersContext } from "../context/FiltersContext"

const useFilters = () => {
  const {filters, setFilters} = useContext(FiltersContext)


  const filterProducts = (products: IProducts[]) => {
    return products.filter(product => (
      product.price >= filters.minPrice &&
      (
        filters.category == 'all' ||
        product.category == filters.category
      )
    ))
  }

  return { filterProducts, setFilters, filters }
}

export default useFilters;