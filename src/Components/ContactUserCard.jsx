import React from 'react';
import profilePicture from '../profile.png';

export default function ContactUserCard() {
  return (
    <section className="contact-user-card">
      <div>
        <img src={profilePicture} alt="User profile picture" />
      </div>
      <div>
        <h1>Jordan Walke</h1>
        <h2>React Creator</h2>
        <p>Lorem Ipsum</p>
      </div>
    </section>
  );
}
