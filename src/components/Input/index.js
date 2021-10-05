import React from "react";
import { Container, Input, Label } from "./style";

function _Input({
  label,
  value,
  onChange,
  type,
  width,
  className,
  autoFocus,
  onEnter,
  icon,
  disabled,
  height,
  onBlur,
  style,
  onKeyUp,
  hasRequiredError,
  verified,
  maxlength,
  ref,
  ...props
}) {
  function handleKeyUp(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      onEnter(event);
    }
  }

  return (
    <Container className={className} width={width} height={height} style={{ style }}>
      <Input
        ref={ref}
        verified={verified}
        disabled={disabled}
        onKeyUp={onEnter && handleKeyUp}
        autoFocus={autoFocus}
        onChange={onChange}
        type={type || "text"}
        name="input-text"
        spellcheck="false"
        value={value}
        onBlur={onBlur}
        height={height}
        maxlength={maxlength}
        hasRequiredError={hasRequiredError}
        {...props}
      />
      <Label icon={icon} verified={verified}>
        {icon}
        {label}
      </Label>
    </Container>
  );
}

export default _Input;
