import React from 'react';
import './Gallary.css';
import GallaryChild from './GallaryChild';
import ArrayData from './MemeData';

export default function Gallary() {
  const gallaryElement = ArrayData.data.memes.map((gal) => (
    <GallaryChild key={gal.id} {...gal} />
  ));

  return <div className="gallary-container">{gallaryElement}</div>;
}
