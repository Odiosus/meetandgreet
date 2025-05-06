import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FastBooking from "./pages/FastBooking.jsx";
import Services from "./pages/Services.jsx";
import Travelers from "./pages/Travelers.jsx";

function App () {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path={'/fast-booking'}
          element={<FastBooking/>}
        />
        <Route
          path={'/services'}
          element={<Services/>}
        />
        <Route
          path={'/travelers'}
          element={<Travelers/>}
        />
      </Routes>
    </Router>
  );
}

export default App;