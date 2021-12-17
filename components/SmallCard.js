import React from 'react';

export default function SmallCard({ Icon, title, path }) {
  return (
      <a className="card-small" href={`${path}`}>
        <Icon w={153} h={163} />
        <h3>{title}</h3>
      </a>
  );
}
