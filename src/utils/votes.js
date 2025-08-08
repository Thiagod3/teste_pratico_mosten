export function getVotos(imdbID) {
  const votos = JSON.parse(localStorage.getItem('votos')) || {};
  return votos[imdbID] || { gostei: 0, naoGostei: 0 };
}

export function votar(imdbID, tipo) {
  const votos = JSON.parse(localStorage.getItem('votos')) || {};
  if (!votos[imdbID]) votos[imdbID] = { gostei: 0, naoGostei: 0 };

  votos[imdbID][tipo] += 1;
  localStorage.setItem('votos', JSON.stringify(votos));
  return votos[imdbID];
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