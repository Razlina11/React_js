import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
	return (
		<div className="app">
			<Nav />
			<Banner />
			<Row title="NETFLIX ORIGINALS" isLargeRow fetchUrl={requests.fetchNetflixOriginals} />
			<Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
			<Row title="TOP WATCHED" fetchUrl={requests.fetchTopRated} />
			<Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
			<Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
			<Row title="HORROR & THRILLER" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="LOVE-ROMANCE" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
