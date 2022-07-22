import { useState } from "react";
import { createContext } from "react";

export function AnimeProvider({ children }) {
    const [anime, setAnime] = useState([]);
    return (
        <AnimeContext.Provider value={anime}>
            <AnimeUpdateContext.Provider value={setAnime}>
                {children}
            </AnimeUpdateContext.Provider>
        </AnimeContext.Provider>
    );
}

export const AnimeContext = createContext([]);
export const AnimeUpdateContext = createContext();
