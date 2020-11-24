import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetfloxOriginals}
      isLargeRow />
      <Row title="Top Raited" fetchUrl={requests.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={requests.fetchTopRated}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocuentaries}/>
      
      <h3 className="copy-right"><p >Copy©Right® by 💖 Sandeep Kumar Misra 💖</p></h3>

    </div>
  );
}

export default App;
