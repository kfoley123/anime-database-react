import React from "react";

export default function AnimeCard(props) {
    console.log(props.animeItem);
    return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg mb-10 p-5 mx-6">
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

            <h1 className="font-bold text-xl mb-2">{props.animeItem.title}</h1>
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
            <p>{props.animeItem.synopsis}</p>
        </div>
    );
}
