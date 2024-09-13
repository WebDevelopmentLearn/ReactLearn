import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getRandomQuote} from "../../store/reducers/actionCreators";
import styles from "./Quote.module.scss";
import {Navbar} from "../Navbar/Navbar";
export const Quote = () => {

    const {quote, isLoading} = useSelector((state) => state.quoteReducer);
    const dispatch = useDispatch();

    const randomQuote = () => {
        const id = Math.floor(Math.random() * 100);
        dispatch(getRandomQuote(id));
    }

    useEffect(() => {
        randomQuote();
    }, []);

    return (
        <div>
            <Navbar/>
            <div className={styles.QuoteContainer}>
                <h1>Quote</h1>
                {isLoading && <p>Loading...</p>}
                {quote && (
                    <div className={styles.quote}>
                        <h2><strong>Quote</strong>: {quote.quote}</h2>
                        <h2><strong>Author</strong>: {quote.author}</h2>
                    </div>
                )}
                <button className={styles.btn} onClick={randomQuote}>Random Quote</button>
            </div>
        </div>
    )
}