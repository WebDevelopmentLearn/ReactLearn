import './App.css';
import {MyForm} from "./components/MyForm/MyForm";
import {Typography} from "antd";

function App() {
  const {Title, Text} = Typography;
  return (
      <div className="App">
        <header className="App-header">
          <div style={{backgroundColor: "#ffffff", padding: "16px", borderRadius: "16px"}}>
            <Title>Hello World</Title>
            <MyForm/>
          </div>
        </header>
      </div>
  );
}

export default App;
