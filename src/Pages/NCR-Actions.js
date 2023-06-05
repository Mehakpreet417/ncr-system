import React, { useContext,useState } from 'react';
import { FormDataContext } from './FormDataContext';
import "./NCR-Actions.css";
import Heading from '../Components/Heading';


const NCRInputForm = () => {
  const [formData, setFormData] = useState({
    action1: '',
    action1Status: '',
    dateCompleted1: '',
    assignedTo1: '',
    action2: '',
    action2Status: '',
    dateCompleted2: '',
    assignedTo2: '',
    action3: '',
    action3Status: '',
    dateCompleted3: '',
    assignedTo3: '',
  });

  const { setSecondFormData } = useContext(FormDataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the form data to the context
    setSecondFormData(formData);
    // Navigate to the review page
    window.location.href = '/review';
  };



  return (
    <>
    <Heading/>
    <div className="ncr-input-form">
      <div>
      <h2>NCR Input Form</h2>
      <p>Resolution Action Information </p>
      </div>
      <div className="input-form">
      <div className="column1">
        <div className="form-row">
          <label htmlFor="action1">Action 1:</label>
          <input type="text" name="action1" value={formData.action1} onChange={handleChange} id="action1" />
        </div>
        <div className="form-row">
          <label htmlFor="action1Status">Action 1 Status:</label>
          <input type="text" name="action1Status" value={formData.action1Status} onChange={handleChange} id="action1Status" />
        </div>
        <div className="form-row">
          <label htmlFor="dateCompleted1">Date Completed:</label>
          <input type="date" name="dateCompleted1" value={formData.dateCompleted1} onChange={handleChange} id="dateCompleted1" />
        </div>
        <div className="form-row">
          <label htmlFor="assignedTo1">Assigned To:</label>
          <input type="text" name="assignedTo1" value={formData.assignedTo1} onChange={handleChange} id="assignedTo1" />
        </div>
      </div>
      <div className="column1">
        <div className="form-row">
          <label htmlFor="action2">Action 2:</label>
          <input type="text" name="action2" value={formData.action2} onChange={handleChange} id="action2" />
        </div>
        <div className="form-row">
          <label htmlFor="action2Status">Action 2 Status:</label>
          <input type="text" name="action2Satus" value={formData.action2Satus} onChange={handleChange} id="action2Status" />
        </div>
        <div className="form-row">
          <label htmlFor="dateCompleted2">Date Completed:</label>
          <input type="date" name="dateCompleted2" value={formData.dateCompleted2} onChange={handleChange} id="dateCompleted2" />
        </div>
        <div className="form-row">
          <label htmlFor="assignedTo2">Assigned To:</label>
          <input type="text" name="assignedTo2" value={formData.assignedTo2} onChange={handleChange} id="assignedTo2" />
        </div>
      </div>
      <div className="column1">
        <div className="form-row">
          <label htmlFor="action3">Action 3:</label>
          <input type="text" name="action3" value={formData.action3} onChange={handleChange} id="action3" />
        </div>
        <div className="form-row">
          <label htmlFor="action3Status">Action 3 Status:</label>
          <input type="text" name="action3Satus" value={formData.action3Satus} onChange={handleChange} id="action3Status" />
        </div>
        <div className="form-row">
          <label htmlFor="dateCompleted3">Date Completed:</label>
          <input type="date" name="dateCompleted3" value={formData.dateCompleted3} onChange={handleChange} id="dateCompleted3" />
        </div>
        <div className="form-row">
          <label htmlFor="assignedTo3">Assigned To:</label>
          <input type="text" name="assignedTo3" value={formData.assignedTo3} onChange={handleChange} id="assignedTo3" />
        </div>
      </div>
      </div>
      <div className="form button">
      <button className="cancel-button" type="cancel">Cancel</button>
      <button onClick={handleSubmit} className="form-button" type="submit">Submit</button>
        </div>
    
    </div>
    </>
  );
};

export default NCRInputForm;
