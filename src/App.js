import React from "react";
import Main from "./components/Main/Main";
import { AnimeProvider } from "./components/Main/Context";

function App() {
    return (
        <AnimeProvider>
            <Main />
            <span>hi</span>
            Something else
        </AnimeProvider>
    );
}

export default App;
