import React from "react";
import PropTypes from "prop-types";

export default function Button({
  autofocus,
  autocomplete,
  disabled,
  form,
  formaction,
  formenctype,
  formmethod,
  formnovalidate,
  formtarget,
  name,
  type,
  children,
  ...restProps
}) {
  return (
    <button
      {...restProps}
      autofocus={autofocus}
      autocomplete={autocomplete}
      disabled={disabled}
      form={form}
      formaction={formaction}
      formenctype={formenctype}
      formmethod={formmethod}
      formnovalidate={formnovalidate}
      formtarget={formtarget}
      name={name}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  autofocus: PropTypes.bool,
  autocomplete: PropTypes.string,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  formaction: PropTypes.string,
  formenctype: PropTypes.string,
  formmethod: PropTypes.string,
  formnovalidate: PropTypes.bool,
  formtarget: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
};

Button.defaultProps = {
  type: "button",
};
