import React from 'react';
import UserProfile from './UserProfile.jsx';
import Posts from './Posts.jsx';
import Contacts from './Contacts.jsx';

export default function Main() {
  return (
    <main>
      <UserProfile />
      <Contacts />
    </main>
  );
}
