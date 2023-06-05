import React, { useContext, useState } from 'react';
import { FormDataContext } from './FormDataContext';
import Heading from '../Components/Heading';

const NCRInfo = () => {
  const [formData, setFormData] = useState({
    summary: '',
    location: '',
    impact: '',
    customer: '',
    dept: '',
    identified: '',
    raised: '',
    supplier: '',
    jobNumber: '',
    issueType: '',
    productType: '',
    attachments: '',
  });

  const { setFirstFormData } = useContext(FormDataContext);

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
    setFirstFormData(formData);
    // Navigate to the actions page
    window.location.href = '/ncr/actions';
  };

  return (
    <>
      <Heading />
      <div className="ncr-input-form">
        <div>
          <h2>NCR Input Form</h2>
          <p>NCR Information: To Be Completed by initiating Individual.</p>
        </div>

        <div className="input-form">
          <div className="column">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Summary</label>
                <input type="text" name="summary" value={formData.summary} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Impact</label>
                <input type="text" name="impact" value={formData.impact} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Customer</label>
                <input type="text" name="customer" value={formData.customer} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Dept Responsible</label>
                <input type="text" name="dept" value={formData.dept} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Identified In</label>
                <input type="text" name="identified" value={formData.identified} onChange={handleChange} />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="column">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Raised by</label>
                <input type="text" name="raised" value={formData.raised} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Supplier name</label>
                <input type="text" name="supplier" value={formData.supplier} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Job number</label>
                <input type="text" name="jobNumber" value={formData.jobNumber} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Issue type</label>
                <input type="text" name="issueType" value={formData.issueType} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Product type</label>
                <input type="text" name="productType" value={formData.productType} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Attachments</label>
                <input type="file" name="attachments" value={formData.attachments} onChange={handleChange} />
              </div>
              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NCRInfo;
