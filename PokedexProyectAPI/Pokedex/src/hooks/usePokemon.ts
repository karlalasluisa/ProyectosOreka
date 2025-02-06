import  { useEffect, useState } from 'react'
import { IPokemon } from '../interfaces/interfaces'
import axios from 'axios'

const usePokemon = (url?: string, id?:string) => {
    const[pokemon,setPokemon]=  useState<IPokemon | null>(null);

    const fetchPokemon = async () => {
        try {
            if (url) {
                const { data }: { data: IPokemon } = await axios.get(url);
                setPokemon(data);
            } else if (id) {
                const { data }: { data: IPokemon } = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${id}`
                );
                setPokemon(data);
            }
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
        }
    };
    
    useEffect(()=>{
        fetchPokemon();
    }, [])
    return{pokemon}
}

export default usePokemon