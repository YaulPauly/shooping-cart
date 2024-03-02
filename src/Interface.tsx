export interface IProducts {
    id: number,
    title: string,
    description: string
    price: number
    discountPercentage:number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export interface IProductsProps {
    products: IProducts[]
}


export interface IFilters {
    category: string
    minPrice: number
}

export interface FiltersProps {
    changeFilters: (filters: IFilters) => void;
}

export interface IFiltersContextType {
    filters: IFilters;
    setFilters: (filters: IFilters) => void;
}

export interface ICart {
    id: number,
    title: string,
    description: string
    price: number
    discountPercentage:number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
    quantity: number
}

export interface ICartContext {
    cart: ICart[]
    addProduct: (product: IProducts) => void
    removeFromCart: (product: IProducts) => void
    clearProduct: () => void
}

export interface IProductsItem {
    products: IProducts[]
    addProduct: (product: IProducts) => void
    removeFromCart: (product: IProducts) => void
    checkProductInCart: (product: IProducts) => boolean
}

export interface ICartItem {
    thumbnail: string
    title: string
    price: number
    quantity:number
    addProduct: () => void
}