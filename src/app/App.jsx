import './App.css';
import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import LangContext from "../contexts/LangContext";
import {useState} from "react";

function App() {
    const [lang, setLang] = useState("ru");
    return (
      <div className="App">
          <LangContext.Provider value={{lang, setLang}}>
              <Navbar />
          </LangContext.Provider>

          <LangContext.Provider value={lang}>
              <Main />
          </LangContext.Provider>
      </div>
  );
}

export default App;
