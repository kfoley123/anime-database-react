import AnimeCard from "../AnimeCard/AnimeCard";
import Header from "../Header/Header";
import { AnimeContext } from "./Context";
import { useContext } from "react";

export default function Main() {
    const anime = useContext(AnimeContext);

    return (
        <>
            <Header />

            <div className="py-30 flex flex-row flex-wrap mb-10">
                {anime.map((item, i) => (
                    <AnimeCard key={i} animeItem={item} />
                ))}
            </div>
        </>
    );
}
