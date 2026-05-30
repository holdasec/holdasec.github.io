import { useState } from 'react';
import { BRAND, CONTACT_INFO, PERSONAL_INFO, CONTACT_PAGE } from '../../../utils/constants';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(CONTACT_PAGE.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <div className="contact-tag text-label text-primary-container">
          <span className="material-symbols-outlined">mail</span>
          <span>{CONTACT_PAGE.channelTag} // {BRAND.name}</span>
        </div>
        <h1 className="contact-title font-headline text-primary">{CONTACT_PAGE.title}</h1>
        <div className="contact-title-bar" />
        <p className="contact-prompt text-primary-container">{CONTACT_PAGE.prompt}</p>
      </header>

      <div className="contact-grid">
        <section className="contact-info-panel">
          <div className="contact-info-header">
            <span className="text-label text-primary">{CONTACT_PAGE.commsFile}</span>
            <span className="material-symbols-outlined text-primary">send</span>
          </div>
          <div className="contact-info-body">
            <div className="contact-status text-label">
              <span className="status-dot">●</span>
              {CONTACT_PAGE.status}
            </div>
            <div className="contact-detail">
              <span className="text-label text-primary-container">{CONTACT_PAGE.emailLabel}</span>
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="contact-detail">
              <span className="text-label text-primary-container">{CONTACT_PAGE.locationLabel}</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="contact-detail">
              <span className="text-label text-primary-container">{CONTACT_PAGE.roleLabel}</span>
              <span>{PERSONAL_INFO.title}</span>
            </div>
          </div>
        </section>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="text-label text-primary-container">
              {CONTACT_PAGE.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={CONTACT_PAGE.namePlaceholder}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="text-label text-primary-container">
              {CONTACT_PAGE.emailInputLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={CONTACT_PAGE.emailPlaceholder}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="text-label text-primary-container">
              {CONTACT_PAGE.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder={CONTACT_PAGE.messagePlaceholder}
            />
          </div>
          <button type="submit" className="btn-terminal btn-terminal-sm">
            {CONTACT_PAGE.submitLabel}
          </button>
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
