import styled from "@emotion/styled";
import Grid from "@mui/material/Grid/Grid";
import Skeleton from "@mui/material/Skeleton/Skeleton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";  
import MultiActionAreaCard from "../../components/MultiActionAreaCard"; 
import { searchMovieAsync, selectMovies } from "./movieSlice";  
import { useEffect } from "react";
import SearchAppBar from "../../components/SearchAppBar";

const MovieContainer = styled.div`
    padding: 40px;
    align-items: center;  
` 
const Movies = () => {
    const movies = useAppSelector(selectMovies);
    const API_IMG="https://image.tmdb.org/t/p/w500/";  
    const dispatch = useAppDispatch();
    useEffect(()=>{
        dispatch(searchMovieAsync())
    },[])
    const searchAction = (query: string) => {
        dispatch(searchMovieAsync(query))
      }
    return(
        <div>
        <SearchAppBar onSearchMovie = {searchAction} title='Movie Gallery'/>
        
        <MovieContainer>
            {movies ? 
                <div>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                        {movies.map((movie: any, index: number) => (
                        <Grid item={true} xs={3} sm={4} md={3} key={index}> 
                        
                           <MultiActionAreaCard imageUrl={API_IMG+movie.poster_path} {...movie}/>
                        </Grid>
                    ))}
                </Grid>
              </div>
                :
                <div> 
                    <Skeleton animation="wave" width={345} height={158} />
                    <Skeleton animation={false} width={345} height={58}/>
                </div>
                 
                

            }
        </MovieContainer>
        </div>
    );
}
export default Movies;
 
