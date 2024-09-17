// FormComponent.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS
import './FormComponent.css';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [emailStatus, setEmailStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'amanprajapati7266@gmail.com'  // Send notification to your email
    };

    // EmailJS send email logic
    emailjs
      .send(
        'YOUR_SERVICE_ID',      // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID',     // Replace with your EmailJS Template ID
        templateParams,
        'YOUR_USER_ID'          // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setEmailStatus('Email sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          setEmailStatus('Failed to send email. Please try again.');
        }
      );
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {emailStatus && <p className="email-status">{emailStatus}</p>}
    </div>
  );
};

export default FormComponent;
