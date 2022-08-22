import React, { useEffect } from 'react'; 
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import { useAppDispatch } from './app/hooks';
import { searchMovieAsync } from './features/movie/movieSlice';
import Movies from './features/movie/Movies';

const App = () =>{
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(searchMovieAsync())
  },[])
  const searchAction = (query: string) => {
    dispatch(searchMovieAsync(query))
  }
  return (
    <div className="App">
        <SearchAppBar onSearchMovie = {searchAction} title='Movie Gallery'/>
        <Movies />
    </div>
  );
}

export default App;
