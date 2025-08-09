export function getVotos(filme) {
  const votos = JSON.parse(localStorage.getItem('votos')) || {};
  const id = filme.imdbID || filme.id;
  return votos[id] || { gostei: 0, naoGostei: 0 };
}

export function votar(movie, tipo) {
  const votos = JSON.parse(localStorage.getItem('votos')) || {};
  
  const id = movie.imdbID || movie.id;
  
  if (!votos[id]) {
    votos[id] = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Type: movie.Type || "",
      Description: movie.Description || "",
      Poster: movie.Poster || "https://via.placeholder.com/150",
      gostei: 0,
      naoGostei: 0
    };
  }

  votos[id][tipo] += 1;
  localStorage.setItem('votos', JSON.stringify(votos));
  return votos[id];
}

export function getVotosGerais() {
  const votos = JSON.parse(localStorage.getItem('votos')) || {};
  let totalGostei = 0;
  let totalNaoGostei = 0;

  Object.values(votos).forEach(({ gostei, naoGostei }) => {
    totalGostei += gostei;
    totalNaoGostei += naoGostei;
  });

  return { totalGostei, totalNaoGostei };
}