import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import InvoicingForm from './Components/InvoicingForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/rejestracja" element={<RegisterForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/wystaw" element={<InvoicingForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
