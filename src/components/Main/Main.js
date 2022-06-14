import React from "react";

export default function Main() {
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
                    />
                    <select id="rating" name="rating" value="Rating">
                        <option selected>Rating</option>
                        <option value="g">G - All Ages</option>
                        <option value="pg">PG - Children</option>
                        <option value="pg13">PG-13 - Teens 13 or older</option>
                        <option value="r17">
                            R - 17+ (violence & profanity)
                        </option>
                        <option value="r">R+ - Mild Nudity</option>
                        <option value="rx">Rx - Hentai</option>
                    </select>

                    <select id="animeType" name="animeType">
                        <option selected>Anime Type</option>
                        <option value="tv">TV Show</option>
                        <option value="movie">Movie</option>
                        <option value="ova">Ova</option>
                        <option value="special">Special</option>
                        <option value="ona">Ona</option>
                        <option value="music">Music</option>
                    </select>

                    <select id="status" name="status">
                        <option selected>Status</option>
                        <option value="airing">Airing</option>
                        <option value="complete">Complete</option>
                        <option value="upcoming">Upcoming</option>
                    </select>

                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}
