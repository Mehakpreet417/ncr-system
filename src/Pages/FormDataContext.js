import React, { createContext, useState } from 'react';

export const FormDataContext = createContext();

export const FormDataProvider = ({ children }) => {
  const [firstFormData, setFirstFormData] = useState({
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
    attachments:'',
  });


  const [secondFormData, setSecondFormData] = useState({
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

  return (
    <FormDataContext.Provider value={{ firstFormData, setFirstFormData, secondFormData, setSecondFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
