import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./assets/Component/NavigationBar";
import HomePage2 from "./assets/Component/HomePage2";
import ClinicHomeScreen from "./assets/ClinicPages/ClinicHomeScreen";
import BookingForm from "./assets/ClinicPages/BookingForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage2 />} />
          <Route path="/search" element={<ClinicHomeScreen />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/signout" element={<div>Signout Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
