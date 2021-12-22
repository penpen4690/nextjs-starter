import React from 'react';

export default function SmallCard({ Icon, title, slug }) {
  return (
    <a className="card-small" href={`/contents/${slug}`}>
      <img src={`/home/${Icon}.png`} alt={`${slug}`}  className='home-icon'/>
      <h3>{title}</h3>
    </a>
  );
}
