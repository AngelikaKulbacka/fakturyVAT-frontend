import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import InvoicingForm from './Components/InvoicingForm';
import HomeForm from './Components/HomeForm';
import DocumentsListForm from './Components/DocumentsListForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditCompanyDataForm from './Components/EditCompanyDataForm';
import EditBuyerDataForm from './Components/EditBuyerDataForm';
import EditProductDataForm from './Components/EditProductDataForm';

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
          <Route exact path="/companydata" element={<EditCompanyDataForm />} />
          <Route exact path="/buyerdata" element={<EditBuyerDataForm />} />
          <Route exact path="/productdata" element={<EditProductDataForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
