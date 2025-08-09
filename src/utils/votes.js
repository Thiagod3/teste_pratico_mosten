export function getVotos(imdbID) {
  const votos = JSON.parse(localStorage.getItem('votos')) || {};
  return votos[imdbID] || { gostei: 0, naoGostei: 0 };
}

export function votar(movie, tipo) {
  const votos = JSON.parse(localStorage.getItem('votos')) || {};

  if (!votos[movie.imdbID]) {
    votos[movie.imdbID] = {
      title: movie.Title || movie.title || "",
      type: movie.Type || "",
      description: movie.description || "", 
      poster: movie.Poster || "", 
      gostei: 0,
      naoGostei: 0
    };
  }

  votos[movie.imdbID][tipo] += 1;
  localStorage.setItem('votos', JSON.stringify(votos));
  return votos[movie.imdbID];
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