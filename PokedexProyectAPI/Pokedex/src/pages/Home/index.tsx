import { useContext } from "react"
import { PokeballIconSmall } from "../../assets/pokeball"
import PokemonList from "../../components/PokemonList"
import styles from './styles.module.scss'
import { PokemonContext } from "../../context/PokemonContext"
import Pagination from "../../components/Pagination"
import { usePagination } from "../../hooks/usePagination"
import { Filters } from "../../components/Filters"

export const Home = () =>{
    const {pokemonsFiltered} = useContext(PokemonContext)   

    const {page, nextPage, previousPage, backToHome} = usePagination()
    
    const perPage = 12;


    
    return (
        <div className={styles.home}>
            <header>
                <div onClick={backToHome}>
                    <PokeballIconSmall></PokeballIconSmall>
                    <span>Pokédex</span>
                </div>
            </header>
            <Filters></Filters>
            <PokemonList perPage={perPage} page={page}pokemonsUrls={pokemonsFiltered}></PokemonList>
            <Pagination perPage={perPage} page={page} nextPage={nextPage} previusPage={previousPage} maxItems={pokemonsFiltered?.length ?? 1}></Pagination>
        </div>
    )
}