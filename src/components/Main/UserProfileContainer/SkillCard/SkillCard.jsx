
import styles from "./SkillCard.module.css";
import {langObj} from "../../../../utils/Utils.js";
import {useContext} from "react";
import LangContext from "../../../../contexts/LangContext";
function SkillCard({skill, language}) {
    const lang = useContext(LangContext);

    function handleHover(event) {
        // console.log(langObj);
        switch (event.type) {
            case "pointerover":
                event.currentTarget.style.boxShadow = `0px 0px 30px ${skill.color}`;
                event.currentTarget.style.border = `2px solid ${skill.color}`;
                // console.log("test")
                break;
            case "pointerout":
                event.currentTarget.style.boxShadow = `0px 0px 10px ${skill.color}`;
                event.currentTarget.style.border = `1px solid ${skill.color}`;
                // console.log("test2")
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
                <p>{lang === "ru" ? "Ранг" : "Rank"}: {skill.name}</p>
                <p>{lang === "ru" ? "Очков" : "Score"}: {skill.score}</p>
                <p>{lang === "ru" ? "Цвет" : "Color"}: {skill.color}</p>
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