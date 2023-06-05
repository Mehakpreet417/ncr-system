import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
//import Heading from './Components/Heading'
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import NCR from './Pages/NCR';
import NCRInfo from './Pages/NCR-Info';
import NCRActions from './Pages/NCR-Actions';
import Approver from './Pages/Approver';
import Settings from './Pages/Settings';
import ReviewPage from './Pages/Review';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
       
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route exact path="/ncr" element={<NCR />} />
            <Route path="/ncr/information" element={<NCRInfo />} />
            <Route path="/ncr/actions" element={<NCRActions />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/approver" element={<Approver />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

