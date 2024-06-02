import React from 'react';
import './conta.css';
function Contcard() {
  return (
    <div className="contact-card">
      <input className="input-field" type="text" placeholder="Name" />
      <input className="input-field" type="email" placeholder="Email" />
      <input className="input-field" type="tel" placeholder="Phone Number" />
      <textarea className="input-field" placeholder="Message"></textarea>
      <button className="send-button">Send Message</button>
    </div>
  );
}

export default Contcard;
