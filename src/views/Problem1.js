import React, { useState } from 'react';
import Shape from '../components/Shape/Shape';

import './Problem1.css';

export default function Problem1() {
  const [selectedColor, setSelectedColor] = useState('blue');
  // const [blue, setBlue] = useState('blue');
  // const [purple, setPurple] = useState('');
  // const [green, setGreen] = useState('');
  return (
    <div className="problem-container">
      <h2>Problem 1: Props and State</h2>

      <div className="description">
        Clicking on each of the small circles should change the color of the large circle. Add
        state, event listeners and update props to make that happen.
      </div>
      <div className="shape-controls">
        <Shape
          color="blue"
          type="circle"
          small
          onClick={() => {
            setSelectedColor('blue');
          }}
        ></Shape>
        <Shape
          color="purple"
          type="circle"
          small
          onClick={() => {
            setSelectedColor('purple');
          }}
        />
        <Shape
          color="green"
          type="circle"
          small
          onClick={() => {
            setSelectedColor('green');
          }}
        />
      </div>
      <div className="selected-shape">
        <Shape
          color="red"
          type="circle"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        ></Shape>
      </div>
    </div>
  );
}
