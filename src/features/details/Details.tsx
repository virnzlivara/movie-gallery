 
import { useParams } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { selectMovies } from "../movie/movieSlice"; 
import { useEffect, useState } from "react";
import { BASE_BACKDROP_PATH } from "../../constants/Constants";
import { MovieContainer, MovieDetailsInfo } from "./DetailsStyles";

const Details = () => {
    const id = useParams();
    const movies : [] = useAppSelector(selectMovies)
    const [movieDetails, setMovieDetails] = useState<any>(); 
    const getMovieDetails = (id: any) => {
        const getById = movies.filter((item: any)=>{ 
            if (item.id === parseInt(id.id)){
                return item;
            }
        })
        return getById[0];
    }

    useEffect(()=> {  
        const movieDetail = getMovieDetails(id); 
        setMovieDetails(movieDetail);
        console.log(`${BASE_BACKDROP_PATH}${movieDetails?.backdrop_path}`)
    })
    return (
        <MovieContainer img={`${BASE_BACKDROP_PATH}${movieDetails?.backdrop_path}`}>
            <MovieDetailsInfo>
              <div className="movie-details-info__overview">
                <strong>Movie Overview:</strong> {movieDetails?.overview}
              </div>
              <div>
                <strong>Release Date:</strong> {movieDetails?.release_date}
              </div>
              <div>
                <strong>Average Rating:</strong> {movieDetails?.vote_average}
              </div>
            </MovieDetailsInfo>
        </MovieContainer>
    )
}

export default Details;