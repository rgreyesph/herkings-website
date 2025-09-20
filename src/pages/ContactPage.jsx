import React, { useState } from 'react';

// Simple styling for the form layout
const styles = {
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr', // Single column on small screens
    gap: '15px',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'left',
  },
  // On wider screens, use two columns
  '@media (min-width: 600px)': {
    form: {
      gridTemplateColumns: '1fr 1fr',
    }
  },
  formField: {
    display: 'flex',
    flexDirection: 'column',
  },
  fullWidth: {
    gridColumn: '1 / -1', // Makes an element span the full width
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'inherit',
  },
  textarea: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    fontFamily: 'inherit',
    minHeight: '120px',
  },
  button: {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#61dafb',
    color: '#20232a',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
    gridColumn: '1 / -1', // Span full width
    justifySelf: 'center',
    width: '50%',
  },
  message: {
    marginTop: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  success: {
    color: '#7CFC00',
  },
  error: {
    color: '#FF474C',
  }
};

function ContactPage() {
  const initialFormData = {
    email: '',
    firstName: '',
    lastName: '',
    mobilePhone: '',
    company: '',
    jobTitle: '',
    message: '', // Added message field
  };

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const apiEndpoint = 'https://l93j0w8de2.execute-api.ap-southeast-1.amazonaws.com/default/herkingsContactFormHandler';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Network response was not ok.');

      setStatus('success');
      setMessage('Thank you for your message!');
      setFormData(initialFormData);
    } catch (error) {
      console.error('There was an error!', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  const isWideScreen = window.innerWidth >= 600;
  const formStyles = isWideScreen ? {...styles.form, ...styles['@media (min-width: 600px)'].form} : styles.form;

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please reach out with any questions!</p>
      <h2>Send us a message</h2>
      <form onSubmit={handleSubmit} style={formStyles}>
        <div style={styles.formField}>
          <label htmlFor="firstName" style={styles.label}>First Name</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} style={styles.input} />
        </div>

        <div style={styles.formField}>
          <label htmlFor="lastName" style={styles.label}>Last Name</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} style={styles.input} />
        </div>

        <div style={{...styles.formField, ...styles.fullWidth}}>
          <label htmlFor="email" style={styles.label}>Email Address*</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />
        </div>

        <div style={{...styles.formField, ...styles.fullWidth}}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} style={styles.textarea}></textarea>
        </div>

        <button type="submit" disabled={status === 'submitting'} style={styles.button}>
          {status === 'submitting' ? 'Submitting...' : 'Send Message'}
        </button>
      </form>

      {message && (
        <p style={{...styles.message, ...(status === 'success' ? styles.success : styles.error)}}>
          {message}
        </p>
      )}
    </div>
  );
}

export default ContactPage;