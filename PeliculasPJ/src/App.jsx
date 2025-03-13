import React, { useState, useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import { updateSearchCount, getTrendingMovies } from './appwrite';

//API- Application Programin Interface - a set of rules that allows one software applicaction to talk to another
const API_BASE_URL ='https://api.themoviedb.org/3'; //Es la dirección web (URL) de la API de The Movie Database (TMDb).
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;//Es una clave secreta que se usa para acceder a la API. Se obtiene de las variables de entorno del proyecto


//define las opciones para la solicitud de la API, incluyendo el método GET y los encabezados necesarios, como la autorización con la clave de API.
const API_OPTIONS = {
  method:'GET',
  headers:{
    accept: 'appication/json',
    Authorization: `Bearer ${API_KEY}`
  }


}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMesage] = useState(null);
  const [movieList, setMovieList]= useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);


  //Decounce es un hook que retrasa la actualización de debouncedSearchTerm hasta que el usuario haya dejado de escribir 
  //por un tiempo en específico, en este caso, 500 milisegundos
  useDebounce(()=> setDebouncedSearchTerm(searchTerm), 500, [searchTerm])
  // 3 argumentos, el primero es la función que se ejecuta después de esperar, el tiempo, y la dependencia que dice cuando cambiar cada vez que cambie searchTerm


//fetchMovies es una función asíncrona que obtiene películas populares de la API.
//Si la solicitud es exitosa, muestra la respuesta en una alerta.
//Si hay un error, lo muestra en la consola y actualiza el mensaje de
  const fetchMovies = async (query = '')=>{
    setIsLoading(true);
    setErrorMesage('')

    try{
      const endpoint = query ? 
      `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`; 
      
      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error('Failed to fetch movies')
      }

      const data = await response.json();
    
      if(data.Response === 'False'){
        setErrorMesage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if(query && data.results.length > 0){
        await updateSearchCount(query, data.results[0])
      }
  
    } catch (error){  
      console.error(`Error fetching movies: ${error}`)
      setErrorMesage('Error fetching movies. Please try again later.')
    } finally{
      setIsLoading(false)
    }
  }

  const loadTrendingMovies = async () =>{
    try{
      const movies = await getTrendingMovies();
      console.log(movies)
      setTrendingMovies(movies);

    }catch (error){
      console.error(`Error fetching trending movies: ${error}`);
     
    }
  }

  useEffect(()=>{ //cuando el componente se monta se llama a fetchMovies
    fetchMovies(debouncedSearchTerm); //se le da valor al query por así decirlo, se llama la función con el valor de búsqueda
  },[debouncedSearchTerm])

  useEffect(() =>{
    loadTrendingMovies();
  }, [])

  return (
    <main>
      <div className='pattern'></div>
      <div className='wrapper'>
        <header>
          <img src='./hero.png' alt='Hero Banner'></img>
          <h1 className=''>
            Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle
          </h1>

        <Search  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
        
        {trendingMovies.length > 0 && (
          <section className='trending mb-7'>
            <h2>Trending Movies</h2>
            <ul>
              {trendingMovies.map((movie, index)=>(
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title}></img>
                </li>))}
            </ul>
          </section>
        )}

        <section className='all-movies'>
          <h2 >All Movies</h2>
          { isLoading ? (<Spinner></Spinner>) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
          <ul>{movieList.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}></MovieCard>
          ))}</ul>)
          }
        </section>
      </div>
    </main>
  )
}

export default App