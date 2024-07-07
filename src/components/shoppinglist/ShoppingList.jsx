import "./ShoppingList.css"

function ShoppingList({itemsArray = []}) {
    return (
        <div className="shoppingListContainer">
            <ul>
                {itemsArray.length === 0  ? "Список покупок пуст" : itemsArray.map((el) => (
                    <li key={el.itemId}>
                        <div className="itemContainer">
                            <h2>Name: {el.name}</h2>
                            <p>Category: {el.category}</p>
                            <p>Price: {el.price}€</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;