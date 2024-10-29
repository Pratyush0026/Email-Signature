// ColorPicker.js

import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import classNames from 'classnames';

export const ColorPicker = ({ title, onChange, currentColor }) => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [colorInput, setColorInput] = useState(currentColor);

  const handleClick = () => setDisplayColorPicker(!displayColorPicker);
  const handleClose = () => setDisplayColorPicker(false);
  const handlePickerChange = (color) => {
    setColorInput(color.hex);
    onChange(color.hex);
  };
  
  const handleInputChange = (e) => {
    const newColor = e.target.value;
    setColorInput(newColor);
    // Validate and apply color only if it's a valid hex or RGB
    if (/^#([0-9A-F]{3}){1,2}$/i.test(newColor) || /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/i.test(newColor)) {
      onChange(newColor);
    }
  };

  return (
    <div className="relative mb-4">
      {title && <label className="text-sm font-medium">{title}</label>}
      
      <div className="flex items-center mt-4">
        <div 
          className="w-12 h-12 rounded shadow cursor-pointer"
          style={{ backgroundColor: colorInput }}
          onClick={handleClick}
        ></div>
        
        <input
          type="text"
          value={colorInput}
          onChange={handleInputChange}
          placeholder="#FFFFFF or rgb(255, 255, 255)"
          className="ml-4 p-2 border rounded"
        />
      </div>

      {displayColorPicker && (
        <div className="absolute z-10 mt-2 transition-opacity duration-200 ease-in-out opacity-100">
          <div className="fixed inset-0 z-10" onClick={handleClose}></div>
          <ChromePicker color={colorInput} onChange={handlePickerChange} />
        </div>
      )}
    </div>
  );
};
