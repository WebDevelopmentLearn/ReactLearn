
import {useContext, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {v4} from "uuid";
import styles from "./NoteForm.module.scss";
import {addNote} from "../../../store/Actions";
import LangContext from "../../../context/LangContext";

const defaultNoteItem = {
  title: "",
  description: "",
  id: null,
};

export const NoteForm = ({item = defaultNoteItem, mode = "show", onSubmit, onModeChange}) => {
    const [noteItem, setNoteItem] = useState(defaultNoteItem);
    const {lang} = useContext(LangContext);

    useEffect(() => {
        setNoteItem(item);
    }, [item]);

    const submitForm = (e) => {
        e.preventDefault();
        onSubmit(noteItem);
        setNoteItem(defaultNoteItem);
        if (mode === "edit") {
            onModeChange();
        }
    };


  return (
      <div>
          <form onSubmit={submitForm} className={mode === "show" ? styles.NotesCreateForm : styles.NotesCreateFormEdit} action="">
              <input value={noteItem.title} onChange={(e) => setNoteItem({
                  ...noteItem,
                  title: e.target.value
              })} type="text" placeholder={lang === "ru" ? "Введите заголовок заметки" : "Enter your note title"}/>
              <textarea value={noteItem.text} style={{resize: "none", width: "50vw"}} onChange={(e) => setNoteItem({
                            ...noteItem,
                            text: e.target.value
                        })} placeholder={lang === "ru" ? "Введите текст заметки" : "Enter your note text"}></textarea>
              <button className={styles.btn} type="submit">{mode === "show" ? (lang === "ru" ? "Добавить" : "Add") : (lang === "ru" ? "Изменить" : "Edit")}</button>
              {mode === "edit" && <button className={styles.btn} onClick={() => onModeChange("show")}>{lang === "ru" ? "Отмена" : "Cancel"}</button>}
          </form>
      </div>
  );
};
