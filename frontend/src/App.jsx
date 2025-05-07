import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FastBooking from "./pages/FastBooking.jsx";
import Services from "./pages/Services.jsx";
import Travelers from "./pages/Travelers.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

function App () {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}

export default App;