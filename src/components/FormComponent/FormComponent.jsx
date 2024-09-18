import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login, register} from "../../store/actionCreators";

import styles from "./FormComponent.module.scss";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const defaultUser = {
    email: "",
    password: "",
};

export const FormComponent = ({page}) => {
    const {
        register: registerField,
        handleSubmit,
        watch,
        reset,
        formState: {errors, isValid}
    } = useForm({mode: 'onChange'});

    // const [passwordsMatch, setPasswordsMatch] = useState(false);
    const dispatch = useDispatch();
    const {status, error} = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const submitForm = (data) => {
        if (page === "register") {
            dispatch(register({email: data.email, password: data.password})); // Используем данные напрямую из формы
        } else {
            dispatch(login({email: data.email, password: data.password}));
        }
        reset(defaultUser);
        if (page === "login") {
            navigate("/profile");
        }
    };

    const passwordInput = watch("password");

    useEffect(() => {
        const repeatPassSubscription = watch((data) => {
            // if (data.passwordInput !== data.repeatPasswordInput) {
            //     setPasswordsMatch(false);
            // } else {
            //     setPasswordsMatch(true);
            // }
        });
        return () => repeatPassSubscription.unsubscribe();
    }, [watch]);

    return (
        <div className={styles.FormComponentContainer}>
            <h1>{page === "register" ? "Register Form" : "Log In"}</h1>
            <form className={styles.FormInputs} onSubmit={handleSubmit(submitForm)}>

                <input
                    {...registerField("email", {
                        required: "Email is required"
                    })}
                    className={styles.emailInput}
                    type="email"
                    placeholder="Email"
                />
                {errors.emailInput && <p>{errors.emailInput.message}</p>}

                <input
                    {...registerField("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    className={styles.passwordInput}
                    type="password"
                    placeholder="Password"
                />
                {errors.passwordInput && <p>{errors.passwordInput.message}</p>}

                {page === "register" && (
                    <>
                        <input
                            {...registerField("repeatPasswordInput", {
                                required: "Please repeat your password",
                                validate: value =>
                                    value === passwordInput || "Passwords do not match"
                            })}
                            className={styles.passwordInput}
                            type="password"
                            placeholder="Repeat Password"
                        />
                        {errors.repeatPasswordInput && <p>{errors.repeatPasswordInput.message}</p>}
                    </>
                )}

                {/*{(page === "register" && passwordsMatch === false) && (*/}
                {/*    <p>Passwords do not match</p>*/}
                {/*)}*/}

                {status === "FAILED" && <p>{error}</p>}

                {page === "login" && (
                    <div className={styles.rememberMeContainer}>
                        <input className={styles.rememberMe} type="checkbox" id="remember"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                )}

                <button className={styles.btn} disabled={!isValid} type="submit">
                    {page === "register" ?
                        status === "LOADING" ? <div className={styles.loader}></div> : "Registration" :
                        "Log In"
                    }
                </button>
            </form>
        </div>
    );
};