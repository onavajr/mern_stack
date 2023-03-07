import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const MovieOne = (props) => {
    const [ movie, setMovie] = useState({});
    useEffect(() =>{
        axios.get('http://localhost:8000/api/movies/' + props.id)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
           <h2>{movie.title}</h2>
        </div>
    )
}
export default MovieOne;