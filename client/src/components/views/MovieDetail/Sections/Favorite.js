import React, { useEffect } from 'react';
import Axios from 'axios';

function Favorite(props) {
    useEffect(()=> {
        const movieId = props.movieId;
        const userFrom = props.userFrom;
        const movieTitle = props.movieInfo.title;
        const moviePost = props.movieInfo.backdrop_path
        const movieRunTime = props.movieInfo.runtime

        let variables = {
            userFrom,
            movieId,
        }
        Axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log(response.data.success)
                if (response.data.success) {

                } else {
                    alert('숫자 정보를 가져오는데 실패했습니다.')
                }
            })
    },[])
    return (
        <div>
            <button>Favorite</button>
        </div>
    );
}

export default Favorite;