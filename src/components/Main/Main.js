import React, { useState } from "react";

export default function Main() {
    const [searchBoxText, setSearchBoxText] = useState("");
    const [rating, setRating] = useState("");
    const [animeType, setAnimeType] = useState("");
    const [status, setStatus] = useState("");

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

    function search() {
        console.log({ searchBoxText, rating, animeType, status });
    }

    return (
        <div>
            <h1>Anime Finder</h1>
            <h2>Search for anime below:</h2>

            <div>
                <form id="searchForm">
                    <input
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Search Box"
                        onChange={handleTextBox}
                    />
                    <select id="rating" name="rating" onChange={handleRating}>
                        <option>Rating</option>
                        <option value="g">G - All Ages</option>
                        <option value="pg">PG - Children</option>
                        <option value="pg13">PG-13 - Teens 13 or older</option>
                        <option value="r17">
                            R - 17+ (violence & profanity)
                        </option>
                        <option value="r">R+ - Mild Nudity</option>
                        <option value="rx">Rx - Hentai</option>
                    </select>

                    <select
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

                    <select id="status" name="status" onChange={handleStatus}>
                        <option>Status</option>
                        <option value="airing">Airing</option>
                        <option value="complete">Complete</option>
                        <option value="upcoming">Upcoming</option>
                    </select>
                </form>
                <button onClick={search}>Submit</button>
            </div>
        </div>
    );
}
