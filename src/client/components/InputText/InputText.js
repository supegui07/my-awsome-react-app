import React from "react";
import PropTypes from "prop-types";

const InputText = ({ type, value, placeholder, onChange, inputTextRef }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      aria-label="input-text"
      className="input-text"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      ref={inputTextRef}
    />
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  inputTextRef: PropTypes.object,
};

export default InputText;
