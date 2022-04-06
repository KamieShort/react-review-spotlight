import React from 'react';
import CatListItem from './CatListItem';

export default function CatList({ cats, ...cat }) {
  return (
    <div className="cat-list">
      {cats.map((cat) => (
        <CatListItem key={cat.id} {...cat} />
      ))}
      <p>{cat.id}</p>;
    </div>
  );
}
