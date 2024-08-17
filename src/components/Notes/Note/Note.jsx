import {useContext, useState} from "react";
import styles from "./Note.module.scss";
import langContext from "../../../context/LangContext";
import {NoteForm} from "../NoteForm/NoteForm";

export function Note({note, onSubmit, removeNote}) {
    const [mode, setMode] = useState("show");
    const {lang} = useContext(langContext);
    if (mode === "edit") {
        return (
            <NoteForm item={note} mode={mode} onSubmit={onSubmit} onModeChange={() => setMode("show")}/>
        );
    }
    return (
        <div className={styles.NoteCard} key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
            <button onClick={() => removeNote(note.id)} className={styles.btn}>{lang === "ru" ? "Удалить" : "Delete"}</button>
            <button className={styles.btn} onClick={() => setMode("edit")}>{lang === "ru" ? "Изменить" : "Edit"}</button>
        </div>
    )
}