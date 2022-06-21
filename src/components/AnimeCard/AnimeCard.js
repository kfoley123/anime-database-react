import React from "react";
import "./AnimeCard.css";

export default function AnimeCard(props) {
    return (
        <div className="wrap max-w-lg min-w-[32rem] rounded overflow-hidden shadow-lg mb-10 p-5 mx-6">
            <div className="">
                <div className="flex">
                    <img
                        className=""
                        src={props.animeItem.images.jpg.image_url}
                    ></img>

                    <div className="p-5">
                        <h3 className="font-bold">{props.animeItem.type}</h3>
                        <h3 className="font-bold"> Aired: </h3>
                        <p>{props.animeItem.aired.string}</p>
                        <h3 className="font-bold">Duration:</h3>
                        <p>{props.animeItem.duration}</p>

                        <h3 className="font-bold">Rating:</h3>
                        <p>{props.animeItem.rating}</p>
                        <h3 className="font-bold">
                            Episodes: {props.animeItem.episodes}
                        </h3>
                    </div>
                </div>

                <h1 className="font-bold text-xl mb-2">
                    {props.animeItem.title}
                </h1>
                <div>
                    {props.animeItem.genres.map((genre, i) => (
                        <p
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                            key={i}
                        >
                            {genre.name}
                        </p>
                    ))}
                </div>
            </div>

            <div className="animeCard--popup">
                <div className="animeCard--popupElement">
                    {props.animeItem.trailer.embed_url && (
                        <iframe
                            src={props.animeItem.trailer.embed_url}
                            frameborder="0"
                            allow=" encrypted-media"
                            allowfullscreen
                            title="video"
                        />
                    )}

                    <p>{props.animeItem.synopsis}</p>
                </div>
            </div>
        </div>
    );
}
