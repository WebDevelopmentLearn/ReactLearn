import {useState, useContext} from "react";
import axios  from "axios";
import styles from "./UserProfile.module.css";
import SkillCard from "../SkillCard/SkillCard";
import Loader from "../../../Loader/Loader";
import LangContext from "../../../../contexts/LangContext";

function UserProfile() {
    let [skillsList, setSkillsList] = useState({});
    const [userInput, setUserInput] = useState('');
    const [honor, setHonor] = useState(0);

    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const {lang} = useContext(LangContext);

    const fetchUserStats = async () => {
        setIsLoading(true); // Set loader to active
        if (userInput) {
            try {
                const response = await axios.get(`https://www.codewars.com/api/v1/users/${userInput}`);
                return response.data;
            } catch (error) {
                if (error.response) {
                    console.error("Ошибка получения ответа: ", error.response.status);
                } else if (error.request) {
                    console.error("Ошибка при получении данных");
                } else {
                    console.error("Ошибка при формировании запроса", error.message);
                }
            } finally {
                console.log("Запрос завершен");
                setIsLoading(false); // Set loader to active
            }
        }
    }

    async function createUserStats(event) {
        event.preventDefault();
        const data = await fetchUserStats();
        if (data) {
            const ranks = data.ranks;
            let honor = data.honor;
            setUsername(data.username);
            setHonor(honor);
            setSkillsList(ranks.languages);
        } else {
            alert("Пользователь не найден");
            setSkillsList({});
        }

    }
    //g964

    if (isLoading) {
        return <Loader />;
    }
    if (skillsList) {
        skillsList = Object.entries(skillsList);
    }
    return (
        <form className={styles.UserProfile} onSubmit={createUserStats}>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder= {lang === "ru" ? "Введите имя пользователя" : "Enter username"}
                required
            />
            <button type="submit">{lang === "ru" ? "Получить статистику" : "Get Stats"}</button>
            <div>
                {skillsList.length > 0 ?
                    <div className={styles.UserInfoContainer}>
                        <h1>{lang === "ru" ? "Имя пользователя" : "Username"}: {username}</h1>
                        <h2>{lang === "ru" ? "Общие очки" : "Total Score"}: {honor}</h2>
                    </div> : null}
                <div className={styles.SkillsList}>
                    {skillsList ? skillsList.map(([lang, skill]) =>
                        <div key={lang}>
                            <SkillCard skill={skill} language={lang} />
                        </div>) : <Loader />
                    }

                </div>
            </div>

        </form>
    );
}

export default UserProfile;

// function PostCreator() {
// //     const createPost = () => {
// //         const postData = {
// //             title: 'New Post Title',
// //             body: 'This is the content of the new post.',
// //             userId: 1,
// //         };
// //         axios.post('https://jsonplaceholder.typicode.com/posts', postData)
// //             .then(response => {
// //                 console.log("Уникальный идентификатор нового поста: ",
// //                     response.data.id);
// //             })
// //             .catch(error => {
// //                 console.error('Ошибка при создании поста: ', error);
// //             });
// //     };
// //     return (
// //         <div>
// //             <button onClick={createPost}>Создать пост</button>
// //         </div>
// //     );
// // }
// // export default PostCreator;