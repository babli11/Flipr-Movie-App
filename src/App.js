
import './App.css';
import Movie from './components/movie';
import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieHeader from './components/movieHeader';
import SearchInput from './components/searchInput';
import FavButton from './components/favButton';
import RemoveButton from './components/removeButton';
function App() {
  const [movies, setMovies] = useState([]);
  const [favs,setFavs]=useState([]);
  const [searchMovie,setSearchMovie]= useState('new');
  

    const getMovie=async(searchMovie)=>{
      const url=`https://www.omdbapi.com/?s=${searchMovie}&apikey=d6f8e8a1`;

      const response=await fetch(url);
      const responseJson=await response.json();
     
      if(responseJson.Search){
        setMovies(responseJson.Search);
      }
    
    };
    useEffect(()=>{
        getMovie(searchMovie);
    },[searchMovie]);
    
    useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavs(movieFavourites);
		}
	}, []);


    const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

    const addFavMovie=(movies)=>{
          const addMovies=new Set([...favs,movies]);
          const uMovie=Array.from(addMovies);

          setFavs(uMovie);
          saveToLocalStorage(uMovie);
    }

    

    const RemoveFav=(movies)=>{
      const delMovies=favs.filter(
        (favs)=>favs.imdbID!==movies.imdbID);
        setFavs(delMovies);
        saveToLocalStorage(delMovies);


    }
    return (
      <div className='container-fluid movie-card'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieHeader appName=''/>
        <SearchInput searchMovie={searchMovie} setSearchMovie={setSearchMovie}/>
      </div>
        <div className="row">
          <Movie movies={movies} 
            handleFavClick={addFavMovie} 
            favComponent={FavButton}/>
          </div>
          <div className='row d-flex align-items-center mt-4 mb-4'>
            <MovieHeader appName='My Favourites'/>
          </div>
          <div className="row">
          <Movie movies={favs} 
            handleFavClick={RemoveFav} 
            favComponent={RemoveButton}/>
          </div>
      </div>
      
      
  );
}

export default App;



// https://www.omdbapi.com/?i=tt3896198&apikey=d6f8e8a1