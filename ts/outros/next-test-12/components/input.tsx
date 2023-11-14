/* eslint-disable no-unused-vars */
import React, { ChangeEvent, KeyboardEvent, FocusEvent } from "react";
import { TextField } from "@naturacosmeticos/natds-web";

interface IInputProps {
  id?: string;
  type: string;
  placeholder?: string;
  value?: string;
  helpText?: string;
  state?: string;
  label?: string;
  disabled?: boolean;
  mask?: (string | RegExp)[];
  autoComplete?: string;
  readOnly?: boolean;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  onKeyDown?(event: KeyboardEvent<HTMLInputElement>): void;
  onFocus?(event: FocusEvent<HTMLInputElement>): void;
  onBlur?(event: FocusEvent<HTMLInputElement>): void;
}

export const Input = (props: IInputProps) => (
  <TextField
    id={props.id}
    label={props.label}
    value={props.value}
    type={props.type}
    placeholder={props.placeholder}
    onChange={props.onChange}
    onKeyDown={props.onKeyDown}
    onFocus={props.onFocus}
    onBlur={props.onBlur}
    helpText={props.helpText}
    state={props.state}
    mask={props.mask}
    disabled={props.disabled}
    autoComplete={props.autoComplete}
    readOnly={props.readOnly}
  />
);
