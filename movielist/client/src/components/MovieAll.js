import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const MovieAll = (props) => {
    const [ allMovies, setAllMovies] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:8000/api/movies')
        .then((res) => setAllMovies(res.data))
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
           <h2>Movie List</h2>
           {
            allMovies.map((movie, index) => (
                <p>
                    <Link to = {'/movie/' + movie._id}>
                        {movie.title}
                    </Link>
                </p>
            ))
           }
        </div>
    )
}

export default MovieAll;