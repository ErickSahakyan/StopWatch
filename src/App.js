import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Timer } from "./Components/Timer/Timer";
import AlarmClock from "./Components/AlarmClock/AlarmClock";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div style={{ backgroundColor: "black", width: "100%", height: "100vh" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/StopWatch" element={<Timer />} />
          <Route path="/AlarmClock" element={<AlarmClock />} />
        </Routes>
      </Router>
    </div>
  );
} 

export default App;
