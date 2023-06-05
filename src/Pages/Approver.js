/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormDataProvider } from './FormDataContext';
import FirstForm from './NCR-Actions';
import SecondForm from './NCR-Info';
import ReviewPage from './Review';

const Approver = () => {
  return (
    <>
      <div className="heading-container">
        <div>
          <h1>NCR Approver</h1>
          <p>View, Manage and act on NCR assigned to you</p>
        </div>
      </div>   
      <Router>
        <FormDataProvider>
          <Routes>
            <Route path="/" element={<FirstForm />} />
            <Route path="/second-form" element={<SecondForm />} />
            <Route path="/review" element={<ReviewPage />} />
          </Routes>
        </FormDataProvider>
      </Router>
    </>
  );
};

export default Approver;*/
import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormDataProvider } from './FormDataContext';

import ReviewPage from './Review';

const Approver = () => {
  return (
    <>
      <div className="heading-container">
        <div>
          <h1>NCR System</h1>
          <p>To Be Completed by initiating Individual.</p>
        </div>
      </div>
      <FormDataProvider>
      <ReviewPage/>
      </FormDataProvider>
    </>
  );
};

export default Approver;

