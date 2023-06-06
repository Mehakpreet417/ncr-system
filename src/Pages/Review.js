import React from 'react';
import "./Review.css";

const ReviewPage = ({ formData }) => {
  return (
    <>
    <div className='review-page'>
      <h4>NCR Entry values</h4>
      <div className='review-data'>
      <div className='.review-column'>
      <div className='data-box'>
        <label>Summary:</label>
        <p>{formData.summary}</p>            
      </div>
      <div className='data-box'>
        <label>Location:</label>
        <p>{formData.location}</p>
      </div>
      <div className='data-box'>
        <label>Impact:</label>
        <p>{formData.impact}</p>
      </div>
      <div className='data-box'>
        <label>Customer:</label>
        <p>{formData.customer}</p>
      </div>
      <div className='data-box'>
        <label>Dept Responsible:</label>
        <p>{formData.dept}</p>
      </div>
      <div className='data-box'>
        <label>Identified In:</label>
        <p>{formData.identified}</p>
      </div>
      <div className='data-box'>
        <label>Raised by:</label>
        <p>{formData.raised}</p>
      </div>
      <div className='data-box'>
        <label>Supplier name:</label>
        <p>{formData.supplier}</p>
      </div>
      <div className='data-box'>
        <label>Job number:</label>
        <p>{formData.jobNumber}</p>
      </div>
      <div className='data-box'>
        <label>Issue type:</label>
        <p>{formData.issueType}</p>
      </div>
      <div className='data-box'>
        <label>Product type:</label>
        <p>{formData.productType}</p>
      </div>
      <div className='data-box'>
        <label>Attachments:</label>
        <p>{formData.attachments}</p>
      </div>
      
      </div>
      <div className='.review-column'>
      <div className='data-box'>
        <label>Action 1:</label>
        <p>{formData.action1}</p>            
      </div>
      <div className='data-box'>
        <label>Action 1 Status:</label>
        <p>{formData.action1Status}</p>
      </div>
      <div className='data-box'>
        <label>Date Completed:</label>
        <p>{formData.dateCompleted1}</p>
      </div>
       <div className='data-box'>
        <label>Assigned To:</label>
        <p>{formData.assignedTo1}</p>
       </div>
       <div className='data-box'>
        <label>Action 2:</label>
        <p>{formData.action2}</p>            
       </div>
       <div className='data-box'>
        <label>Action 2 Status:</label>
        <p>{formData.action2Status}</p>
       </div>
       <div className='data-box'>
        <label>Date Completed:</label>
        <p>{formData.dateCompleted2}</p>
       </div>
       <div className='data-box'>
        <label>Assigned To:</label>
        <p>{formData.assignedTo2}</p>
       </div>
       <div className='data-box'>
        <label>Action 3:</label>
        <p>{formData.action3}</p>            
       </div>
       <div className='data-box'>
        <label>Action 3 Status:</label>
        <p>{formData.action3Status}</p>
       </div>
       <div className='data-box'>
        <label>Date Completed:</label>
        <p>{formData.dateCompleted3}</p>
       </div>
       <div className='data-box'>
        <label>Assigned To:</label>
        <p>{formData.assignedTo3}</p>
       </div>
      </div>
      </div>
    </div>
    
    </>
  );
};

export default ReviewPage;


