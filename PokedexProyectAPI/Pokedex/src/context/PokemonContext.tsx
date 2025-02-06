import{  createContext, ReactNode, useEffect, useState } from 'react'
import { AllPokemonsResult, PokemonsByTypeResult, PokeType } from '../interfaces/types';
import axios from 'axios';


interface ContextProps{
    types: PokeType[]
    filterSelected: PokeType
    pokemonsFiltered: string[] | null
    changeTypeSelected: (type: PokeType) =>  void   
}
//crear contexto
export const PokemonContext = createContext <ContextProps> ({} as ContextProps);

interface PokemonProviderProps {
    children: ReactNode;
  }
  
const PokemonProvider = ({children}: PokemonProviderProps) => {
    const allPokemonsUrl= "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
    
    const defaultState: PokeType = {
        name: "All",
        url: allPokemonsUrl,
    }

    const [allPokemons, setAllPokemons] = useState(null);
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

    const [types, setTypes] = useState([defaultState]);
    const [filterSelected, setFilterSelected]= useState(defaultState);

    const changeTypeSelected = async (type:PokeType) =>{
        setFilterSelected(type);
        
        if (!type?.url) throw new Error("URL no encontrada");
        const { data } = await axios.get(type.url);

        const pokemons = data?.pokemon?.map(
            ({pokemon}:PokemonsByTypeResult) => pokemon?.url
        );

        setPokemonsFiltered(type.name !== "All" ? pokemons : allPokemons);

    };

    const getAllPokemons = async () =>{
        const {data} = await axios.get(allPokemonsUrl);

        // console.log(data) // devuelve toda la data 

        const pokemons = data?.results?.map(
            (pokemon: AllPokemonsResult) => pokemon?.url
        );
        //console.log(pokemons)

        setAllPokemons(pokemons);
        setPokemonsFiltered(pokemons)
    };

    const getPokemonsType = async () =>{
        const {data} = await axios.get("https://pokeapi.co/api/v2/type");

        // console.log("types")
        // console.log(data)
        
        setTypes([...types, ...data.results])
    };

    useEffect(()=>{
        getAllPokemons();
        getPokemonsType();
    },[])

    return (
        <PokemonContext.Provider value={{types, filterSelected,pokemonsFiltered, changeTypeSelected}}> {children}</PokemonContext.Provider>
    )
}
export default PokemonProvider