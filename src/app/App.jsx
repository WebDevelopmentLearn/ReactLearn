import './App.css';
import SpotifyLogo from "../components/SpotifyLogo/SpotifyLogo";
import Header from "../components/Header/Header";
import SignIn from "../components/SignIn/SignIn";
import LinksContainer from "../components/LinksContainer/LinksContainer";

function App() {
    return (
      <div className="App">
          <SpotifyLogo />
          <Header />
          <SignIn />
          <LinksContainer />
      </div>
  );
}

export default App;
