import React from 'react';
import './conta.css';
function Contcard() {
  return (
    <div id='cd' className="contact-card">
      <input className="input-field" type="text" placeholder="Name" />
      <input className="input-field" type="email" placeholder="Email" />
      <input className="input-field" type="tel" placeholder="Phone Number" />
      <textarea id='mess' className="input-field" placeholder="Message"></textarea>
      <button className="send-button">Send Message</button>
    </div>
  );
}

export default Contcard;
