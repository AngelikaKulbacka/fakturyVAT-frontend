import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Components/RegisterForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/rejestracja" element={<RegisterForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
