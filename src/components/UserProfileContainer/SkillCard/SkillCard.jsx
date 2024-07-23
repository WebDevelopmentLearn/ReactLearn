
import styles from "./SkillCard.module.css";
import {langObj} from "../../../utils/Utils.js";
function SkillCard({skill, language}) {
    // langContainer.style.border = `1px solid ${data.color}`;
// langContainer.style.boxShadow = `0px 0px 10px ${data.color}`;
//
// langContainer.addEventListener("pointerover", (event) => {
//     langContainer.style.boxShadow = `0px 0px 30px ${data.color}`;
//     langContainer.style.border = `2px solid ${data.color}`;
// });
// langContainer.addEventListener("pointerout", (event) => {
//     langContainer.style.boxShadow = `0px 0px 10px ${data.color}`;
//     langContainer.style.border = `1px solid ${data.color}`;
// });
    function handleHover(event) {
        console.log(langObj);
        switch (event.type) {
            case "pointerover":
                event.currentTarget.style.boxShadow = `0px 0px 30px ${skill.color}`;
                event.currentTarget.style.border = `2px solid ${skill.color}`;
                console.log("test")
                break;
            case "pointerout":
                event.currentTarget.style.boxShadow = `0px 0px 10px ${skill.color}`;
                event.currentTarget.style.border = `1px solid ${skill.color}`;
                console.log("test2")
                break;

        }
    }
    let langName = language;
    if (language in langObj) {
        langName = langObj[language];
    }



    return (
        <div onPointerOver={handleHover} onPointerOut={handleHover} className={styles.langCard} style={{border: `1px solid ${skill.color}`, boxShadow: `0px 0px 10px ${skill.color}`}}>
            <div className={styles.headerCard}>
                <img className="langIcon" src={`/assets/langs/${language.toLowerCase()}_icon.svg`} onError={function (event) {
                    event.target.src = `./assets/production.png`; // Изменяем src непосредственно
                }
                }/>
                <h3>{langName}</h3>
            </div>
            <div className={styles.infoCard}>
                <p>Ранг: {skill.name}</p>
                <p>Очков: {skill.score}</p>
                <p>Цвет: {skill.color}</p>
            </div>
        </div>
    )
}



// elementsObj.lang.textContent = langName;
// elementsObj.rankType.textContent += data.name;
// elementsObj.rank.textContent += data.rank;
// elementsObj.score.textContent += data.score;
// elementsObj.color.textContent += data.color;


export default SkillCard;