import React,{useState} from 'react';
import './Review';
import './Approver.css';

const Approver =()=>{
  const [description, setDescription] = useState('');

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };

  const handleReject = () => {
    // Handle reject logic here
    console.log('Reject');
  };

  const handleApprove = () => {
    // Handle approve logic here
    console.log('Approve');
  };
    return(
      <>
        <div className="heading-container">
          <div>
            <h1>NCR Approver</h1>
            <p>View,Manage and Act on NCR assigned to you</p>
          </div>
        </div>
        <div className="Approver-navbar-container">
      <div><h3>Side Edge Spec Mismatch</h3></div>
      <div>
      <ul className="Approver-navbar">
        <a href="/review">Details</a>
        <a href="/review">Notes</a>
      </ul>
      </div>
      
    </div>
    <div className="review-container">
      <textarea
        value={description}
        onChange={handleInputChange}
        placeholder="Enter description..."
      />
      <div>
        <button className="reject-button" onClick={handleReject}>Reject</button>
        <button className="approve-button" onClick={handleApprove}>Approve</button>
      </div>
    </div>
      </>
    );
};

export default Approver;
