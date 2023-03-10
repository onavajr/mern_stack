import React, {useEffect, useState} from 'react';
import {Link, Navigate} from '@reach/router';
import axios from 'axios';

const ListAll = (props) => {
    const [allSongs, setAllSongs] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/karaoke")
        .then((res) => {
            console.log(res.data);
            setAllSongs(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        ;
    },[]);

    return(
        <div>
            <table>
                <thead>
                    <th>Song tiltle</th>
                    <th>Action Available</th>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </div>
    )
}

export default ListAll;