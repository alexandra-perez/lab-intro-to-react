import React from 'react';
import profilePicture from '../profile.png';
import Posts from './Posts';

export default function UserProfile() {
  return (
    <section className="user-profile__section">
      <article>
        <div>
          <img src={profilePicture} alt="User profile picture" />
        </div>
        <div>
          <h1>Jordan Walke</h1>
          <h2>React Creator</h2>
          <p>Lorem Ipsum</p>
        </div>
      </article>
      <article>
        <Posts/>
      </article>
    </section>
  );
}
