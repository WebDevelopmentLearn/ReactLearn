import './App.css';

import {MainRoute} from "../routes/MainRoute";
import LangContext from "../context/LangContext";
import {useState} from "react";

function App() {
    const [lang, setLang] = useState("ru");

    return (
        <div className="App">
            <LangContext.Provider value={{lang, setLang}}>
                <MainRoute />
            </LangContext.Provider>
        </div>
    );
}

export default App;
