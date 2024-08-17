import styles from "./Notes.module.scss";
import LangContext from "../../context/LangContext";
import {useContext} from "react";
import {Navbar} from "../Navbar/Navbar";
import {useDispatch, useSelector} from "react-redux";
import {addNote, deleteNote, editNote} from "../../store/Actions";
import {NoteForm} from "./NoteForm/NoteForm";
import {Note} from "./Note/Note";
import {v4} from "uuid";


export function Notes() {
    const {lang} = useContext(LangContext);


    const notes = useSelector((state) => state.notes.notes);
    const dispatch = useDispatch();


    const onSubmit = (note) => {
        if (note.id) {
            dispatch(editNote(note));
        } else {
            dispatch(
                addNote({
                    ...note,
                    id: v4(),
                })
            );
        }
    };

    const removeNote = (id) => dispatch(deleteNote(id));
    return (
        <div>
            <Navbar/>
            <div className={styles.NotesContainer}>
                <h1 style={{fontSize: "32px"}}>{lang === "ru" ? "Заметки" : "Notes page"}</h1>
                <NoteForm onSubmit={onSubmit} />
                <ul className={styles.NotesList}>
                    {notes.length > 0 ? notes.map((note) => (
                        <Note key={note.id} note={note} onSubmit={onSubmit} removeNote={removeNote}/>
                    )) : <p style={{fontSize: "16px"}}>{lang === "ru" ? "Заметок нет" : "No notes"}</p>}
                </ul>
            </div>
        </div>
    )
}