import { useState } from "react";

import { AnimeUpdateContext } from "./Context";
import { useContext } from "react";

export function useAnimeSearch() {
    const [searchBoxText, setSearchBoxText] = useState("");
    const [rating, setRating] = useState("");
    const [animeType, setAnimeType] = useState("");
    const [status, setStatus] = useState("");

    const setAnimeContext = useContext(AnimeUpdateContext);

    function fetchAnime() {
        fetch(
            `https://api.jikan.moe/v4/anime?q=${searchBoxText}&rating=${rating}&type=${animeType}&status=${status}`
        )
            .then((response) => response.json())
            .then((response) => setAnimeContext(response.data));
    }
    return {
        setSearchBoxText,
        setRating,
        setAnimeType,
        setStatus,
        fetchAnime,
    };
}
