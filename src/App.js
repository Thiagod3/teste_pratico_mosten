import {useEffect, useState} from 'react';

import logotipo from './assets/logotipo.svg';
import './styles/App.css';
import Card from './components/card'
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";
import { getVotosGerais } from './utils/votes';

const API_URL = 'https://www.omdbapi.com?apikey=978babb6'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [votosGerais, setVotosGerais] = useState({ totalGostei: 0, totalNaoGostei: 0 });

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }
    useEffect(() => {
      setVotosGerais(getVotosGerais());
        searchMovies('Avengers');
  }, []);


  return (
    <div className="App">

      <header className="App-header">
        <img src={logotipo} />

        <div>
          <h1>Isso presta?</h1>
          <h2>Simulador de votação de filmes/séries</h2>
        </div>

        <button className="btn-add">Adicionar filmes/séries</button>  
              
      </header>

      <main>        
        <div className="votesContainer">
          <p>VOTOS GERAIS:</p>
          <div className="votes">
            <div>
            {votosGerais.totalGostei}
             <ThumbsUp size={32}/>
             <p>Gostei</p>
            </div>
            <div>
              {votosGerais.totalNaoGostei}
              <ThumbsDown size={32}/>
              <p>Não gostei</p>
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
