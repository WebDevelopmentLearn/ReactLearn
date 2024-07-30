
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import styles from "./DynamicForm.module.css";

export function DynamicForm() {

    const {
        register,
        handleSubmit,
        watch,
    formState: {
            errors
    }} = useForm();

    const submitForm = (data) => {
        console.log("Registration has been successful", data);
    }

    const subscribe = watch("subscribe");
    useEffect(() => {
        const subscription = watch((data) => {
            console.log(data)
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <form className={styles.DynamicForm} onSubmit={handleSubmit(submitForm)} action="">
            <input {...register("username", {
                required: {
                    value: true,
                    message: "Имя пользователя не должно быть пустым"
                },
                minLength: {
                    value: 3,
                    message: "Имя пользователя должно быть не менее 3 символов"
                },
                maxLength: {
                    value: 20,
                    message: "Имя пользователя должно быть не более 20 символов"
                }
            })} type="text" placeholder="Enter username"/>
            {errors.username ? <p style={{color: "#ac1111"}}>{errors.username.message}</p> : ""}
            <input {...register("password", {
                required: {
                    value: true,
                    message: "Пароль не должен быть пустым"
                },
                minLength: {
                    value: 8,
                    message: "Длина пароля должна быть не менее 8 символов"
                }
            })} type="text" placeholder="Enter password"/>
            {errors.password ? <p style={{color: "#ac1111"}}>{errors.password.message}</p> : ""}
            <div className={styles.SubscribeContainer}>
                <label className={styles.subscribeLabel} htmlFor="subscribe">
                    <span>Подписаться на рассылку?</span>
                    <input {...register("subscribe")} type="checkbox"/>
                </label>
                {subscribe &&
                    <input {...register("email", {
                        pattern: {
                            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: "Введите корректный email"
                        }
                    })} placeholder="Enter your email"/>}
            </div>
            {subscribe && errors.email ? <p style={{color: "#ac1111"}}>{errors.email.message}</p> : ""}
            <input type="submit" value="Зарегестрироваться"/>


        </form>
    )
}