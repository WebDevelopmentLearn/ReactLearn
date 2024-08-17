import {useEffect, useRef, useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import styles from "./Timer.module.scss";

export function Timer() {
    const [currentTime, setCurrentTime] = useState(0);

    let timerRef = useRef(null);
    const [isTimerActive, setIsTimerActive] = useState(false);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCurrentTime((prev) => prev + 1);
            setIsTimerActive(true)
        }, 1000);
        return () => {
            clearInterval(timerRef.current);
            setIsTimerActive(false);
        }

    }, []);

    console.log("Timer render");
    return (
        <div>
            <Navbar/>
            <div className={styles.TimerContainer}>
                <h1 style={{color: "#8a61ea"}}>Timer page</h1>
                <h2 ref={timerRef}>Timer: {currentTime}s</h2>
                <div style={{display: "flex", gap: "4px", justifyContent: "center", alignItems: "center"}}>
                    <button className={styles.btn} disabled={isTimerActive} onClick={() => {
                        if (!isTimerActive) {
                            timerRef.current = setInterval(() => {
                                setCurrentTime((prev) => prev + 1);
                            }, 1000);
                            setIsTimerActive(true);
                        }

                    }}>Continue Timer
                    </button>
                    <button className={styles.btn} disabled={!isTimerActive} onClick={() => {
                        if (isTimerActive) {
                            clearInterval(timerRef.current);
                            setIsTimerActive(false);
                        }
                    }}>Stop Timer
                    </button>
                </div>
            </div>
        </div>
    )
}