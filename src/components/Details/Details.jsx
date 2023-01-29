import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Details() {
    const details = useSelector(store => store.details);

    return (
        <>
        <h1>Details</h1>
        {
            details.map((detail) =>{
                return(
                    <Details key={detail.id} detail={detail}/>
                    //<img key={favorite.id} src={favorite.url}/>
                )
                
            })
        }
        </>
    )
}

export default Details;