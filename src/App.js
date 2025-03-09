// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cdplayer from "./cdplayer.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countdown from "./Countdown";
import BirthdayPage from "./BirthdayPage";
import EndCredits from "./EndCredits.js";

// const spacing = 2;

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Cdplayer />

    //   </header>
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/happy-birthday" element={<BirthdayPage />} />
        <Route path="/credits" element={<EndCredits/>} />
      </Routes>
    </Router>
  );
}

export default App;
