import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Contact form submitted:", formData);
  };

  return (
    <div className="contact-page">

      {/* Page Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have a question or feedback? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Form */}
      <section className="contact-content">

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label htmlFor="name">
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message..."
              rows="6"
              required
            />
          </div>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

    </div>
  );
}

export default Contact;