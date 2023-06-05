/*import React from 'react';
import { useLocation } from 'react-router-dom';
import { FormDataProvider } from './FormDataContext';

const ReviewPage = () => {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <>
    <div className="heading-container">
        <div>
      <h1>NCR System</h1>
      <p>To Be Completed by initiating Individual.</p>
      </div>
    </div>
    <div>
      <h1>Review Page</h1>
      <p>Review the entered values:</p>
      <div>
        <label>summary:</label>
        <p>{formData.summary}</p>            
      </div>
      <div>
        <label>location:</label>
        <p>{formData.location}</p>
      </div>
      <div>
        <label>impact:</label>
        <p>{formData.impact}</p>
      </div>
      <div>
        <label>customer:</label>
        <p>{formData.customer}</p>
      </div>
      <div>
        <label>dept:</label>
        <p>{formData.dept}</p>
      </div>
      <div>
        <label>identified:</label>
        <p>{formData.identified}</p>
      </div>
      <div>
        <label>raised:</label>
        <p>{formData.raised}</p>
      </div>
      <div>
        <label>action1:</label>
        <p>{formData.action1}</p>            
      </div>
      <div>
        <label>action1Status:</label>
        <p>{formData.action1Status}</p>
      </div>
      <div>
        <label>dateCompleted1:</label>
        <p>{formData.dateCompleted1}</p>
      </div>
      <div>
        <label>assignedTo1:</label>
        <p>{formData.assignedTo1}</p>
      </div>
      <div>
        <label>action2:</label>
        <p>{formData.action2}</p>            
      </div>
      <div>
        <label>action2Status:</label>
        <p>{formData.action2Status}</p>
      </div>
      <div>
        <label>dateCompleted2:</label>
        <p>{formData.dateCompleted2}</p>
      </div>
      <div>
        <label>assignedTo2:</label>
        <p>{formData.assignedTo2}</p>
      </div>
      <div>
        <label>action3:</label>
        <p>{formData.action3}</p>            
      </div>
      <div>
        <label>action3Status:</label>
        <p>{formData.action3Status}</p>
      </div>
      <div>
        <label>dateCompleted3:</label>
        <p>{formData.dateCompleted3}</p>
      </div>
      <div>
        <label>assignedTo3:</label>
        <p>{formData.assignedTo3}</p>
      </div>
      <button>Submit</button>
    </div>
    </>
  );
};

export default ReviewPage;
*/
import React, { useContext } from 'react';
import { FormDataContext } from './FormDataContext';

const ReviewPage = () => {
  const { firstFormData, secondFormData } = useContext(FormDataContext);

  return (
    <div>
      <h2>Review Page</h2>
      <h3>Form 1 Data:</h3>
      <p>Summary: {firstFormData.summary}</p>
      <p>Location: {firstFormData.location}</p>
      <p>Impact: {firstFormData.impact}</p>
      <p>customer: {firstFormData.customer}</p>
      <p>dept: {firstFormData.dept}</p>
      <p>identified: {firstFormData.identified}</p>
      <p>raised: {firstFormData.raised}</p>
      <p>supplier: {firstFormData.supplier}</p>
      <p>jobNumber: {firstFormData.jobNumber}</p>
      <p>issueType: {firstFormData.issueType}</p>
      <p>productType: {firstFormData.productType}</p>
      <p>attachments:{firstFormData.attachments}</p>

      
      <h3>Form 2 Data:</h3>
      <p>Action 1: {secondFormData.action1}</p>
      <p>Action 1 Status: {secondFormData.action1Status}</p>
      <p>Date Completed 1: {secondFormData.dateCompleted1}</p>
      <p>Assigned To 1: {secondFormData.assignedTo1}</p>
      <p>Action 1: {secondFormData.action2}</p>
      <p>Action 1 Status: {secondFormData.action2Status}</p>
      <p>Date Completed 1: {secondFormData.dateCompleted2}</p>
      <p>Assigned To 1: {secondFormData.assignedTo2}</p>
      <p>Action 1: {secondFormData.action3}</p>
      <p>Action 1 Status: {secondFormData.action3Status}</p>
      <p>Date Completed 1: {secondFormData.dateCompleted3}</p>
      <p>Assigned To 1: {secondFormData.assignedTo3}</p>
    </div>
  );
};

export default ReviewPage;
