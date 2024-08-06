import {useEffect, useState} from "react";
import {fetchCatImage} from "../../api/API";
import styles from "./CatImage.module.css";
import Loader from "../Loader/Loader";

export function CatImage() {
    const [cat, setCat] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        changeCat();
    }, []);

    const changeCat = () => {
        setLoading(true);
        fetchCatImage()
            .then((res) => {
                setCat(res);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(true);
            });
    };

    return (
        <div className={styles.CatImage}>
            <h1>Random cat</h1>
            <div className={styles.cat__container}>
                {loading ? <Loader /> : <img src={cat.url} alt={cat.id}/>}
            </div>
            <button onClick={changeCat} className={styles.changeCatBtn}>
                Change cat
            </button>
        </div>
    );
}