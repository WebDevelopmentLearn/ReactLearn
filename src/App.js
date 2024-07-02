// import logo from './logo.svg';
import './App.css';
import ImageComponent from "./components/ImageComponent";
import VideoComponent from "./components/VideoComponent";
import ParagraphsComponent from "./components/ParagraphsComponent";
import ListsComponent from "./components/ListsComponent";

function App() {
  return (
      <div className="App">
          <ImageComponent/>
          <VideoComponent />
          <ParagraphsComponent/>
          <ListsComponent/>
      </div>
  );
}

export default App;
