//ListsComponent

import "../ListsComponent.css"

function ListsComponent() {
    return (
        <div className={"listsComponent"}>
            <ul>
                <li>Social Activities</li>
                <li>Hobbies and Passions</li>
                <li>Health and Wellbeing</li>
                <li>Business</li>
                <li>Technology</li>
            </ul>

            <ol>
                <li>Hobby</li>
                <li>Music</li>
                <li>Videogame</li>
                <li>Blog</li>
                <li>Sport</li>
            </ol>
        </div>
    );
}

export default ListsComponent;