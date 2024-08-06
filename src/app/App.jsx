import './App.css';

import {MainRoute} from "../routes/MainRoute";
import {useState} from "react";
import LangContext from "../context/LangContext";

function App() {
    const [lang, setLang] = useState("ru");
    console.log(lang)
    return (
        <div className="App">
            <LangContext.Provider value={{lang, setLang}}>
                <MainRoute />
            </LangContext.Provider>


        </div>
    );
}

export default App;
