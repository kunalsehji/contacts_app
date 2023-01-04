import "./App.css";
import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import LandingScreen from "./screens/landingScreen";
import AddContact from "./screens/add-contact";
import EditContact from "./screens/edit-contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/edit-contact/:id" element={<EditContact />} />
    </Routes>
  );
}

export default App;
