import React from 'react';
import ContactUserCard from './ContactUserCard';

export default function Contacts() {
  return (
    <section className="contacts__section">
      <h1 className='contacts__section__header'>Contacts</h1>
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
      <ContactUserCard />
    </section>
  );
}
