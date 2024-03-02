import { ReactNode, createContext, useMemo, useState } from "react";
import { IFilters, IFiltersContextType } from "../Interface";

export const FiltersContext = createContext<IFiltersContextType>({
    filters: { category: 'all', minPrice: 0 },
    setFilters: () => {}
});


export const FiltersProvider = ({ children }: { children: ReactNode }) => {

    const [filters, setFilters] = useState<IFilters>({
        category: 'all',
        minPrice: 0
    })

    const contextValueFilter = useMemo(() => ({ filters, setFilters }), [filters, setFilters]);

    return (
        <FiltersContext.Provider
            value={contextValueFilter}
        >
            {children}
        </FiltersContext.Provider >
    )
}