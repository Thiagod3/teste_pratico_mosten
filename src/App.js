import logotipo from './assets/logotipo.svg';
import './styles/App.css';

function App() {
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
        <div>CARD AQUI</div>
        <div>
          <p>VOTOS GERAIS:</p>
          <div>
            <p>Gostei</p>
          </div>
          <div>
            <p>Não gostei</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
