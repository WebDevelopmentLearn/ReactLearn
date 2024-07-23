
import styles from "./Loader.module.css";

// const container = document.createElement("div");
// container.classList.add("container");
// for (let i = 0; i < 4; i++) {
//     const bar = document.createElement("div");
//     bar.classList.add("bar");
//     container.append(bar);
// }
function Loader() {
    return (
        <div className={styles.LoaderContainer}>
            <h3>Загрузка...</h3>
            <div className={styles.container}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </div>

    )
}

export default Loader;