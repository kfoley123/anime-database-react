import React from "react";

export default function AnimeCard(props) {
    console.log(props.animeItem);
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    class="w-full"
                    src={props.animeItem.images.jpg.image_url}
                ></img>
                <h1 class="font-bold text-xl mb-2">{props.animeItem.title}</h1>
                <h3>{props.animeItem.type}</h3>
                <h3> Aired: {props.animeItem.aired.string}</h3>
                <h3>{props.animeItem.duration}</h3>
                <div>
                    {props.animeItem.genres.map((genre, i) => (
                        <p key={i}>{genre.name}</p>
                    ))}
                </div>
                <h3>{props.animeItem.rating}</h3>
                <p>{props.animeItem.synopsis}</p>
                <h3>Episodes: {props.animeItem.episodes}</h3>
            </div>
        </div>
    );
}
