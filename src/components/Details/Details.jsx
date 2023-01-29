import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import {useHistory, useParams } from 'react-router-dom';

function Details() {
    const details = useSelector(store => store.details);
    const dispatch = useDispatch();
    const params = useParams(details);
    const history = useHistory();

    useEffect(() => {
        const movieId = params.id;
        console.log(params);

        dispatch({
            type: 'SAGA/GET_MOVIE_DESCRIPTION',
            payload: movieId
        })
    }, [params.id]);

    const backToMovieList=(event)=>{
        event.preventDefault();
        history.push('/');
    }

    return (
        <>
        <h1>Details</h1>
        <ul>
            {details.map((detail, index) => {
                return(
                    <li key={index}>
                        <img src={detail.poster}/>
                        {detail.title}
                        {detail.description}
                        {detail.genres}
                        <button onClick={backToMovieList}>Back to Movie List</button>
                    </li>
                )
            })
        }
        </ul>
        </>
    )
}

export default Details;