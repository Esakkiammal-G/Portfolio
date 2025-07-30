import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Contact from './Contact';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) formErrors.email = 'Email is invalid';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      emailjs
        .send(
          'service_lb2fybm', // replace with your service ID
          'template_or9xxao', // replace with your template ID
          formData,
          'gnMwDpDEPHmR6eTdk' // replace with your user ID
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.log('Failed to send email:', error.text);
          }
        );
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear from you
          </p>
        </div>
        
        <div className="contact-content">
          <Contact />
          
          <div className="contact-form">
            {isSubmitted ? (
              <div className="form-success">
                Thank you! Your message has been sent successfully. I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                  {errors.name && <div className="form-error">{errors.name}</div>}
                  }
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                  }
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                  {errors.message && <div className="form-error">{errors.message}</div>}
                  }
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
