const API_KEY = "992103f17d17957f72181179c53d7597";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR` ,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`,
}
export default requests;