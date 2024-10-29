import React, { useState } from 'react';

// Using the inputList object as defined
export const inputList = {
  default: [
    { label: 'Portrait URL', name: 'portrait' },
    { label: 'Logo URL', name: 'logo' },
    { label: 'First name', name: 'firstName' },
    { label: 'Last name', name: 'lastName' },
    { label: 'Job title', name: 'jobTitle' },
    { label: 'Department', name: 'department' },
    { label: 'Company name', name: 'companyName' },
    { label: 'Website URL', name: 'websiteUrl' },
  ],
  contact: [
    { label: 'Office phone', name: 'officePhone' },
    { label: 'Mobile phone', name: 'mobilePhone' },
    { label: 'Email address', name: 'emailAddress' },
    { label: 'Address', name: 'address' },
  ],
  social: [
    { label: 'Facebook', name: 'socialFacebook' },
    { label: 'Twitter', name: 'socialTwitter' },
    { label: 'LinkedIn', name: 'socialLinkedin' },
    { label: 'Instagram', name: 'socialInstagram' },
  ],
};

const InputForm = () => {
  const [formData, setFormData] = useState({});

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data: ', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Default Information</h2>
      {inputList.default.map((input) => (
        <div key={input.name}>
          <label>{input.label}</label>
          <input
            type="text"
            name={input.name}
            value={formData[input.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}

      <h2>Contact Information</h2>
      {inputList.contact.map((input) => (
        <div key={input.name}>
          <label>{input.label}</label>
          <input
            type="text"
            name={input.name}
            value={formData[input.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}

      <h2>Social Media</h2>
      {inputList.social.map((input) => (
        <div key={input.name}>
          <label>{input.label}</label>
          <input
            type="text"
            name={input.name}
            value={formData[input.name] || ''}
            onChange={handleChange}
          />
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default InputForm;
