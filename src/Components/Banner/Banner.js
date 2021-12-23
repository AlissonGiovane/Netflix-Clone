import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import requests from '../../requests';
import filmeTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Banner() {
  const [filme, setFilme] = useState([]);
  const [trailerurl, setTrailerurl] = useState("");

  useEffect(() => {
      
    async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals) ;

        setFilme(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]
        );
        return request;
       
    } fetchData();

  }, []) 

   function truncate(str ,n) {
      return str?.length > n ? str.substr(0, n - 1) + "..." : str;  };

      const handleClick = (filme) => {
        
        if(trailerurl){
          setTrailerurl("");
        }else{
          filmeTrailer(filme?.name || "")
          .then(url => {
            const urlParams = new URLSearchParams( new URL(url).search);
            setTrailerurl(urlParams.get('v'));
   
          }).catch(error => console.log(error))
        }
          };

          const opts = {
            height: "390",
            width: "100%",
            playerVars: {
              autoplay:1,
            },
          }
  
    return (
      <div>
       <header className="banner"
       onClick={() => setTrailerurl("")}
       style={{
           backgroundSize: "cover",
           backgroundImage: `url(
               "https://image.tmdb.org/t/p/original/${filme?.backdrop_path}"
           )`,
           backgroundPosition: "center-center",
       }}
       >

           <div className="banner__conteudo">

               <h1 className="banner__titulo">
                   {filme?.titulo || filme?.name || filme?.original_name}
               </h1>
               <div className="banner__buttons">

                   <button
                    onClick={()=> handleClick(filme)}

                     className="banner__botao">
                     Assistir
                   </button>
                   <button className="banner__botao">
                     Minha Lista
                   </button>

               </div>
              <h1 className="banner__descricao">

                  {truncate(filme?.overview, 150)}

              </h1>
           </div>
         
         <div className="banner--fadeBottom"/>
         
       </header>
      
       {trailerurl && <YouTube
             videoId={trailerurl}  
             opts={opts}
            />} 
      </div>
    )
}

export default Banner