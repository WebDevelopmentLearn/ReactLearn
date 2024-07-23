import {useContext} from "react";
import LangContext from "../../../contexts/LangContext";

export function SwitchLangBtn() {
    const lang = useContext(LangContext);

    function switchLang() {

    }

    return (
        <button>
            L
        </button>
    )
}