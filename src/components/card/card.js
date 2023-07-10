import React, {useState, useEffect} from 'react';
import "./card.css";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const Cards = ({movie}) => {

    const[isLoading, setisLoading] = useState(true)
    
    useEffect(() =>{
        setTimeout(() => {
            setisLoading(false)
        }, 3000);
    }, [])

    return <>
    {
        isLoading
        ?
        <div className='cards'>
            <SkeletonTheme color="#73c5e0" highlightColor='#131211'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link to = {`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className='cards'>
                <img className='imgCard' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
                <div className='cardOverlay'>
                    <div className='cardTitle'>{movie?movie.original_title:""}</div>
                    <div className='cardRuntime'>{movie?movie.release_date:""}</div>
                    <span className='cardRating'>{movie?movie.vote_average:""}
                    <i className='fas fa-star'></i>
                    </span>
                    <div className='cardDesc'>{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards