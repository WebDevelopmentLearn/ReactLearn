import {useState, useEffect} from "react";
import axios  from "axios";
import styles from "./UserProfile.module.css";
import SkillCard from "../SkillCard/SkillCard";
import Loader from "../../Loader/Loader";

function UserProfile() {
    let [skillsList, setSkillsList] = useState({});
    const [userInput, setUserInput] = useState('');
    const [rank, setRank] = useState(null);

    const [username, setUsername] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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
        setUsername(data.username);
        setSkillsList(data.ranks.languages);
    }


    if (isLoading) {
        return <Loader />;
    }
    skillsList = Object.entries(skillsList);
    return (
        <form className={styles.UserProfile} onSubmit={createUserStats}>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Введите имя пользователя"
            />
            <button type="submit">Получить данные</button>
            <div>
                <h2>Ранг: {rank}</h2>
                <div className={styles.SkillsList}>
                    {/*{skillsList ? skillsList.map(([lang, skill]) => (*/}
                    {/*    <div key={lang}>*/}
                    {/*        <SkillCard skill={skill} language={lang} />*/}
                    {/*    </div>*/}
                    {/*)) :  <Loader />}*/}

                    {skillsList ? skillsList.map(([lang, skill]) =>
                        <SkillCard skill={skill} language={lang} />) : <Loader />}

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