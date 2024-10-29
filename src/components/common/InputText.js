import React from 'react';
import PropTypes from 'prop-types';

export const InputText = ({ value, onBlur, name, label }) => (
  <div className="relative mb-12">
    <input
      type="text"
      required
      defaultValue={value}
      onBlur={onBlur}
      name={name}
      key={name}
      className="w-full h-12 p-2 mb-12 text-xl font-mono text-gray-300 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:ring-0"
    />
    <label
      htmlFor={name}
      className="absolute left-2 top-12 transition-all opacity-50 text-gray-300 pointer-events-none transform scale-100"
    >
      {label}
    </label>
  </div>
);

InputText.propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
