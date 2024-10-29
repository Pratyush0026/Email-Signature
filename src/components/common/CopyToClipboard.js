import React from 'react';

const CopyToClipboard = ({ id }) => {
  const handleCopy = () => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const markup = targetElement.innerHTML;
      const tempInput = document.createElement('input');
      document.body.appendChild(tempInput);
      tempInput.setAttribute('value', markup);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      alert('Copied to clipboard!'); // Optional: Notify the user
    }
  };

  return (
    <button onClick={handleCopy}>
      Copy HTML
    </button>
  );
};

export default CopyToClipboard;
