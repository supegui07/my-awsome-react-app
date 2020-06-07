import React from "react";
import PropTypes from "prop-types";
import InputGroupContainer from "./InputGroupContainer";
import Label from "../Label/Label";
import InputText from "../InputText/InputText";

const InputGroup = ({ text, value, onChange, placeholder }) => {
  return (
    <InputGroupContainer onChange={onChange}>
      {({ getLabelProps, getInputTextProps }) => {
        return (
          <div>
            <Label
              {...getLabelProps({
                text,
              })}
            />
            <InputText
              {...getInputTextProps({
                value,
                onChange,
                placeholder,
              })}
            />
          </div>
        );
      }}
    </InputGroupContainer>
  );
};

InputGroup.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default InputGroup;
