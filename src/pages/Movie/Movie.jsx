import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieInfo } from "../../components/MovieInfo/MovieInfo"
import { Navigation } from "../../components/Navigation/Navigation";
import { Actor } from "../../components/Actor/Actor"
import { Spinner } from "../../components/Spinner/Spinner";

const apiUrl = import.meta.env.VITE_API_DB;
const apiKey = import.meta.env.VITE_API_KEY;
const idiomaApi = import.meta.env.VITE_API_LANG;

export function Movie() {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };

    useEffect(() => {
        const moviehUrl = `${apiUrl}${id}?${apiKey}${idiomaApi}`;
        getMovie(moviehUrl);
    },[])

    return(
        <div>
            {!movie && <Spinner />}
            {movie && <Navigation movie={movie}/>}
            {movie && <><MovieInfo movie={movie} /></>}
            {movie && <Actor />}
        </div>
    )
}