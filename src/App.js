import {useEffect, useState} from 'react';

import logotipo from './assets/logotipo.svg';
import './styles/App.css';
import Card from './components/card'
import { ThumbsUp, ThumbsDown, MagnifyingGlass } from "@phosphor-icons/react";
import { getVotosGerais } from './utils/votes';

const API_URL = 'https://www.omdbapi.com?apikey=978babb6'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [votosGerais, setVotosGerais] = useState({ totalGostei: 0, totalNaoGostei: 0 });
  const [texto, setTexto] = useState('');
  const [showSearch, setShowSearch] = useState(false);


  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
  }
  useEffect(() => {
    setVotosGerais(getVotosGerais());
      searchMovies('Avengers');
  }, []);

  function handleChange(event) {
    setTexto(event.target.value);
  }

  function toggleSearch() {
    setShowSearch(prev => !prev);
  }


  return (
    <div className="App">

      <header className="App-header">
        <img src={logotipo} />

        <div>
          <h1>Isso presta?</h1>
          <h2>Simulador de votação de filmes/séries</h2>
        </div>

        <div className="header-btn">
        <button className="btn-add">Adicionar filmes/séries</button>
        <button className="btn-search" onClick={toggleSearch}>
          <MagnifyingGlass size={28} weight="bold" color="#612CB5" />
        </button>
        </div>
        
      </header>

      <main className="main-body">        
        {showSearch && (
          <div className="search-bar">
            <input
              type="text"
              value={texto}
              onChange={handleChange}
              placeholder="Digite algo"
              className="search-input"
            />
            <button className="btn-search" onClick={() => searchMovies(texto)}>
              <MagnifyingGlass size={24} weight="bold" color="#612CB5" />
            </button>
          </div>
        )}
        
        <div className="votesContainer">
          <h3>VOTOS GERAIS:</h3>
          <div className="votes">           
            <div className="votes-box">
              <p className="all-votes">{votosGerais.totalGostei}</p>            
              <p className="thumb-icon"><ThumbsUp size={32}/>Gostei</p>
            </div>            
            <div className="votes-box">
              <p className="all-votes">{votosGerais.totalNaoGostei}</p>     
              <p className="thumb-icon"><ThumbsDown size={32}/>Não gostei</p>
            </div>            
          </div>
        </div>

        {
          movies?.length > 0
              ?(
                  <div className='cardContainer'>
                      {movies.map((movie) => (<Card movie={movie}/>))}
                  </div>
              ) :
              (
                  <div>
                      <h2>Filme não encontrado</h2>
                  </div>
              )
        }
      </main>
    </div>
  );
}

export default App;
