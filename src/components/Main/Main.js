import React, { useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";

export default function Main() {
    const [searchBoxText, setSearchBoxText] = useState("");
    const [rating, setRating] = useState("");
    const [animeType, setAnimeType] = useState("");
    const [status, setStatus] = useState("");
    const [anime, setAnime] = useState([]);
    let fetchPath;

    function handleTextBox(event) {
        setSearchBoxText(event.target.value);
    }
    function handleRating(event) {
        setRating(event.target.value);
    }

    function handleAnimeType(event) {
        setAnimeType(event.target.value);
    }

    function handleStatus(event) {
        setStatus(event.target.value);
    }


    function search(e) {
        e.preventDefault();
        fetch(
            `https://api.jikan.moe/v4/anime?q= + ${ searchBoxText ? searchBoxText : "" } + ${ rating? '&rating=$'+rating : ""} + ${animeType? '&type='+animeType : ""} + ${ status? '&status='+status : ""}`
        )
            .then((response) => response.json())
            .then((response) => setAnime(response.data));
    }

    return (
        <div>
            <div className="bgImage h-80 mb-5">
                <h1 className="font-medium px-10 leading-tight text-5xl mt-0 mb-2 text-blue-600">
                    Anime Finder
                </h1>
                <h2 className="font-medium px-10 leading-tight text-3xl mt-0 mb-2 text-blue-600">
                    Search for anime below:
                </h2>

                <div className="flex">
                    <form className="flex" id="searchForm" onSubmit={search}>
                        <input
                            className="bg-orchid-crayola hover:bg-pearly-purple  placeholder-black text-black-800 font-semibold hover:text-white py-2 px-4 border border-amber-900  rounded mx-4"
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Keyword"
                            onChange={handleTextBox}
                        />
                        <select
                            className="bg-orchid-crayola hover:bg-pearly-purple text-black-700 font-semibold hover:text-white py-2 px-4 border border-amber-900 hover:border-transparent rounded mx-4"
                            id="rating"
                            name="rating"
                            onChange={handleRating}
                        >
                            <option>Rating</option>
                            <option value="g">G - All Ages</option>
                            <option value="pg">PG - Children</option>
                            <option value="pg13">
                                PG-13 - Teens 13 or older
                            </option>
                            <option value="r17">
                                R - 17+ (violence & profanity)
                            </option>
                            <option value="r">R+ - Mild Nudity</option>
                            <option value="rx">Rx - Hentai</option>
                        </select>

                        <select
                            className="bg-orchid-crayola hover:bg-pearly-purple text-black-700 font-semibold hover:text-white py-2 px-4 border border-amber-900 hover:border-transparent rounded mx-4"
                            id="animeType"
                            name="animeType"
                            onChange={handleAnimeType}
                        >
                            <option>Anime Type</option>
                            <option value="tv">TV Show</option>
                            <option value="movie">Movie</option>
                            <option value="ova">Ova</option>
                            <option value="special">Special</option>
                            <option value="ona">Ona</option>
                            <option value="music">Music</option>
                        </select>

                        <select
                            className="bg-orchid-crayola hover:bg-pearly-purple text-black-700 font-semibold hover:text-white py-2 px-4 border border-amber-900 hover:border-transparent rounded mx-4"
                            id="status"
                            name="status"
                            onChange={handleStatus}
                        >
                            <option>Status</option>
                            <option value="airing">Airing</option>
                            <option value="complete">Complete</option>
                            <option value="upcoming">Upcoming</option>
                        </select>
                    </form>
                    <button
                        className="bg-orchid-crayola hover:bg-pearly-purple text-black-700 font-semibold hover:text-white py-2 px-4 border border-amber-900 hover:border-transparent rounded"
                        onClick={search}
                    >
                        Submit
                    </button>
                </div>
            </div>

            <div className="py-30 flex flex-row flex-wrap mb-10">
                {anime.map((item, i) => (
                    <AnimeCard key={i} animeItem={item} />
                ))}
            </div>
        </div>
    );
}
