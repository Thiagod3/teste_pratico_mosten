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