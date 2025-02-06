import React from 'react'
import styles from './styles.module.scss'
import PokemonCard from '../PokemonCard';

interface Props{
    pokemonsUrls?: string[] | null;
    page: number ;
    perPage:number
}

export const PokemonList = ({pokemonsUrls, page, perPage}: Props) => {
  
  return (
    <div>
       <div className={styles.pokemons}>
      {pokemonsUrls
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemonUrl) => (
          <PokemonCard key={pokemonUrl} url={pokemonUrl} />
        ))}
    </div>
    </div>
  )
}

export default PokemonList