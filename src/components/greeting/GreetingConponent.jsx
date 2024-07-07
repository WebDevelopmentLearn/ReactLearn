import "./GreetingComponent.css"

function GreetingComponent({name = "Гость"}) {
    return (
        <h1>Привет, {name}!</h1>
    );
}

export default GreetingComponent;