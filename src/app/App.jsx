import './App.css';
import UserProfile from "../components/UserProfileContainer/UserProfile/UserProfile";
import Navbar from "../components/Navbar/Navbar";
import UserProfileContainer from "../components/UserProfileContainer/UserProfileContainer";

function App() {
    return (
      <div className="App">
          <Navbar />
          <UserProfileContainer />
      </div>
  );
}

export default App;
