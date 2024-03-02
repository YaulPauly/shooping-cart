import { ChangeEvent, useId } from 'react'
import './../styles/Filters.css'
import { IFilters} from '../Interface'
import useFilters from '../hooks/useFilters'


export const Filters = () => {
    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
        
        const filterMinPrice: string = event.target.value
        const parsedMinPrice: number = parseInt(filterMinPrice, 10);

        setFilters((prev: IFilters) => ({
            ...prev,
            minPrice: parsedMinPrice
        }))
    }


    const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
        const filterCategory: string = event.target.value

        setFilters((prev: IFilters) => ({
            ...prev,
            category: filterCategory
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                    type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                />
                ${filters.minPrice}
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>
        </section>
    )
}