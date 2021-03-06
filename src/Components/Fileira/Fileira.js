import React, { useEffect, useState} from 'react'
import "./Fileira.css"
import axios from '../../axios';
import YouTube from 'react-youtube';
const filmeTrailer = require( 'movie-trailer' )


const baseUrl = "https://image.tmdb.org/t/p/original/";

function Fileira({ title , fetchUrl, isLargeRow }) {
  const [filmes, setFilmes] = useState([]);
  
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData(){
     const request = await axios.get(fetchUrl);
     setFilmes(request.data.results);
     return request;
    } fetchData();
    
  }, [fetchUrl]);
 
   const opts = {
     height: "390",
     width: "100%",
     playerVars: {
       autoplay:1,
     },
   }
     
   const handleClick = (movie) => {
     if(trailerUrl){
       setTrailerUrl("");
     }else{
      filmeTrailer(movie?.name || "")
       .then(url => {
         const urlParams = new URLSearchParams( new URL(url).search);
         setTrailerUrl(urlParams.get('v'));

       }).catch(error => console.log(error))
     }
       };

    return (
        <div className="fileira" >
            <h2>{title}</h2>

            <div className="fileira__posters" >

              {filmes?.map(movie =>(
                <img 
                key={movie.id}
                onClick={()=> handleClick(movie)}
                className={`fileira__poster  ${isLargeRow && "fileira__posterLarge"} `}
                src={`${baseUrl}${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`}
                alt={movie.name} 
                
                />
              ))}

            </div>
            {trailerUrl && <YouTube
             videoId={trailerUrl}  
             opts={opts}
            />}
        </div>
    )
}

export default Fileira
