
import styles from "./CityCard.module.css";
// name: "Нагоя",
//     description: "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
//     imageUrl: "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",
//     facts: [
//     "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
//     "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше."
// ]
function CityCard({selectedCity}) {
    return (
        <div className={styles.cityCardContainer}>
            <h2>{selectedCity.name}</h2>
            <img style={{width: "700px"}} src={selectedCity.imageUrl} alt=""/>
            <p>{selectedCity.description}</p>
            <ul className={styles.factsList}>
                {selectedCity.facts.map((fact, index) => (
                    <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
    )
}

export default CityCard;