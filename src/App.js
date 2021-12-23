import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Fileira from './Components/Fileira/Fileira';
import requests from "./requests"

function App() {
  return (
    <div className="App">
        <Banner />

        <Navbar />

      <Fileira title="ORIGINAIS NETFLIX " fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow />

      <Fileira title="Em Alta" fetchUrl={requests.fetchTrending} />

      <Fileira title="Melhores avaliados" fetchUrl={requests.fetchTopRated} />

      <Fileira title="Filmes de Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Fileira title="Filmes de Ação" fetchUrl={requests.fetchActionMovies} />

      <Fileira title="Filmes de Terror" fetchUrl={requests.fetchHorrorMovies} />

      <Fileira title="Filmes de Comédia" fetchUrl={requests.fetchComedyMovies} />

      <Fileira title="Documentários" fetchUrl={requests.fetchDocumentaries} />


    </div>
  );
}

export default App;
