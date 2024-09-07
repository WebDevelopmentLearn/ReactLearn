import './App.css';
import {Theme} from "../context/theme";
import {MaterialUI} from "../components/MaterialUI/MaterialUI";


function App() {
    return (
        <Theme>
            <MaterialUI />
        </Theme>
    );
}

export default App;
