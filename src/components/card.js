import { useState, useEffect } from 'react'
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";
import { getVotos, votar } from '../utils/votes'
import posterPlaceholder from '../assets/posterPlaceholder.png'
import '../styles/movieCard.css'

const Card = ({ movie }) => {
    const [imgSrc, setImgSrc] = useState(movie.Poster !== 'N/A' ? movie.Poster : posterPlaceholder)
    const [votes, setVotes] = useState({ gostei: 0, naoGostei: 0 })

    useEffect(() => {
        setImgSrc(movie.Poster !== 'N/A' ? movie.Poster : posterPlaceholder);
    }, [movie.Poster]);

    useEffect(() => {
      const votosSalvos = getVotos(movie.imdbID)
      setVotes(votosSalvos)
    }, [movie.imdbID])

    function handleVote(tipo) {
      const novosVotos = votar(movie, tipo);
      setVotes(novosVotos)
    }

    return(
    <div className='movie'>
        <div>
            <img
                src={imgSrc}
                alt={movie.Title}
                className="poster"
                onError={() => setImgSrc(posterPlaceholder)}
            />
        </div>
        <div>
            <h3>{movie.Title}</h3>
            <p>
                {movie.Type === "movie" ? "Filme" : movie.Type === "series" ? "Série" : movie.Type} | {movie.Year}
            </p>
        </div>
        <div className="votes-container">
            <button className="btn-vote" onClick={() => handleVote('gostei')}>
              <ThumbsUp size={32} color="#f7f7f7" />
              <span className="number-votes">{votes.gostei}</span>
            </button>
            <button className="btn-vote" onClick={() => handleVote('naoGostei')}>
              <ThumbsDown size={32} color="#f7f7f7" />
              <span className="number-votes">{votes.naoGostei}</span>
            </button>
        </div>
    </div>
)
}

export default Card;
