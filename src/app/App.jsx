// import logo from './logo.svg';
import './App.css';

import CitySelector from "../components/CitySelector/CitySelector";
import {useState} from "react";
import CityCard from "../components/CityCard/CityCard";

function App() {
    const [currentCity, setCity] = useState();
    function updateCity (newCity) {
        setCity(newCity);
    };
    return (
      <div className="App">
          <CitySelector updateCity={updateCity} />
          {currentCity ? <CityCard selectedCity={currentCity} /> : <h1>Город не выбран</h1> }
      </div>
  );
}

export default App;
