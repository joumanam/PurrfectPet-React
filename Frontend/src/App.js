import "./components/Modal.css";
import VaccineListScreen from "./screens/VaccineListScreen";
import { UserContext } from "./UserContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import ErrorPage from "./screens/ErrorPage";
import Profile from "./screens/Profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vaccines" element={<VaccineListScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
