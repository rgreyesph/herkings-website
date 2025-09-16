import React from 'react';

function ContactPage() {
  // NOTE: This form does not do anything yet.
  // We need a backend service to collect submissions, which is our next big step!
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the page from reloading
    alert('Thank you for subscribing! (Functionality coming soon)');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please reach out with any questions!</p>

      <h2>Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default ContactPage;