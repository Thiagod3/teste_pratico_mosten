import { useState } from 'react'

import posterPlaceholder from '../assets/posterPlaceholder.png'
import '../styles/movieCard.css'
import { ThumbsUp, ThumbsDown } from "@phosphor-icons/react";

const Card = ({ movie }) => {
    const [imgSrc, setImgSrc] = useState(movie.Poster !== 'N/A' ? movie.Poster : posterPlaceholder)

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
            <button className="btn-vote"><ThumbsUp size={32} color="#f7f7f7" /></button>
            <button className="btn-vote"><ThumbsDown size={32} color="#f7f7f7" /></button>
        </div>
    </div>
)
}

export default Card;