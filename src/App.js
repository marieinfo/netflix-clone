import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Navbar from "./Navbar";
import request from "./requeste";

function App() {
  return (
    <div className='app'>
      {/* nav bar */}
      {/* banner */}
      <Navbar />
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
        fetchurl={request.fetchNetflixOriginals}
        islargerow={true}
      />
      <Row title='TRENDING NOW' fetchurl={request.fetchTrending} />
      <Row title='Top Rated' fetchurl={request.fetchTopRated} />
      <Row title='TRENDING NOW' fetchurl={request.fetchTrending} />
      <Row title='Top Rated' fetchurl={request.fetchTopRated} />
      {/* <Row title='Acrion Movies' fetchurl={request.fetchActionMovies} />
      <Row title='Horror Movies' fetchurl={request.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchurl={request.fetchRomanceMovies} />
      <Row title='Documentaries' fetchurl={request.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
