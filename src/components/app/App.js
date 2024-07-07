// import logo from './logo.svg';
import './App.css';
// import ImageComponent from "./components/ImageComponent";
// import VideoComponent from "./components/VideoComponent";
// import ParagraphsComponent from "./components/ParagraphsComponent";
// import ListsComponent from "./components/ListsComponent";
import GreetingComponent from "../greeting/GreetingConponent";
import ShoppingList from "../shoppinglist/ShoppingList";
import OrderStatusComponent from "../orderstatus/OrderStatusComponent";

function App() {
  return (
      <div className="App">
          <GreetingComponent name="Антон"/>

          <ShoppingList itemsArray={[
              {itemId: 0, name: "Apple Iphone 11", category: "Smartphone", price: 286},
              {itemId: 1, name: "Samsung Galaxy S23", category: "Smartphone", price: 745},
              {itemId: 2, name: "AOC Gaming 27G2SPU", category: "PC Monitor", price: 175},
              {itemId: 3, name: "Accolmile Cola Bear", category: "E-Bike", price: 1600},
          ]} />

          <ShoppingList itemsArray={[]} />

          <OrderStatusComponent orderId={1215} status="обработан" />
          <OrderStatusComponent orderId={5212} status="доставлен" />
          <OrderStatusComponent orderId={6732} status="в пути" />
          <OrderStatusComponent  />
      </div>
  );
}

export default App;
