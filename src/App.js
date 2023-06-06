import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import NCR from './Pages/NCR';
import NCRInfo from './Pages/NCR-Info';
import NCRActions from './Pages/NCR-Actions';
import Approver from './Pages/Approver';
import Settings from './Pages/Settings';
import ReviewPage from './Pages/Review';

const App = () => {
  const [formData, setFormData] = useState({});
  
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route exact path="/ncr" element={<NCR />} />
            <Route path="/ncr/information" element={<NCRInfo formData={formData} setFormData={setFormData}  />} />
            <Route path="/ncr/actions" element={<NCRActions formData={formData} setFormData={setFormData}  />} />
            <Route path="/review" element={<ReviewPage formData={formData} />} />
            <Route path="/approver" element={<Approver/>} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

/*
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Pages/Approver.css';
import FormPage1 from './Pages/NCR-Info';
import FormPage2 from './Pages/NCR-Actions';
import ReviewPage from './Pages/Review';
import Navbar from './Components/Navbar';



const App = () => {
  
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const submitForm = () => {
    // Perform any necessary actions with the form data, such as sending it to an API or storing it in a database
    console.log('Submitted Form Data:', formData);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />
    <div>
      {currentPage === 1 && (
        <FormPage1 formData={formData} setFormData={setFormData} nextPage={nextPage} />
      )}
      {currentPage === 2 && (
        <FormPage2 formData={formData} setFormData={setFormData} submitForm={submitForm} />
      )}
      {currentPage === 3 && <ReviewPage formData={formData} />}
    </div>
    </div>
    </Router>
  );
};

export default App;

*/
