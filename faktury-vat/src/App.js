import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import InvoicingForm from './Components/InvoicingForm';
import HomeForm from './Components/HomeForm';
import DocumentsListForm from './Components/DocumentsListForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/register" element={<RegisterForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/wystaw" element={<InvoicingForm />} />
          <Route exact path="/" element={<HomeForm />} />
          <Route exact path="/dokumenty" element={<DocumentsListForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
