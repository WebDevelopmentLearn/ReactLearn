import {Navbar} from "../Navbar/Navbar";
import {connect} from "react-redux";
import {increment, decrement, plus, minus} from "../../store/Actions";
import styles from "./Counter.module.scss";
function Counter({counter, increment, decrement, plus, minus}) {

    return (
        <div>
            <Navbar/>
            <div className={styles.CounterContainer}>
                <h1 style={{color: "#8a61ea"}}>Counter page</h1>
                <h2>Counter: {counter}</h2>
                <div
                    style={{
                        display: "flex",
                        gap: "4px",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap"
                    }}>


                    <button className={styles.btn} onClick={() => minus(1000)}>Minus -1000</button>
                    <button className={styles.btn} onClick={() => minus(100)}>Minus -100</button>
                    <button className={styles.btn} onClick={() => minus(10)}>Minus -10</button>
                    <button className={styles.btn} onClick={decrement}>Decrement--</button>
                    <button className={styles.btn} onClick={increment}>Increment++</button>
                    <button className={styles.btn} onClick={() => plus(10)}>Plus +10</button>
                    <button className={styles.btn} onClick={() => plus(100)}>Plus +100</button>
                    <button className={styles.btn} onClick={() => plus(1000)}>Plus +1000</button>

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        plus: (num) => dispatch(plus(num)),
        minus: (num) => dispatch(minus(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);