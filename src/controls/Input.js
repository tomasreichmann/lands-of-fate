/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme, { reset } from "../theme";
import Label from "./Label";

const InputWithLabel = ({
  label,
  LabelComponent = Label,
  className = undefined,
  style = {},
  inputClassName = undefined,
  inputStyle = {},
  labelClassName = undefined,
  labelStyle = {},
  ...restProps
}) => {
  const { type = "text", ...restInputProps } = restProps;
  return (
    <label className={className} style={style}>
      <LabelComponent className={labelClassName} style={labelStyle} >{label}</LabelComponent>
      <Input type={type} {...restInputProps} className={inputClassName} style={inputStyle} />
    </label>
  );
};

const Input = props => {
  const { type = "text", label, ...restProps } = props;
  if (label) {
    return <InputWithLabel {...props} />;
  }
  return (
    <input
      css={{
        ...reset,
        width: '100%',
        minWidth: '1em',
        borderBottom: `1px solid ${theme.color.box}`,
        "::placeholder": {
          ...reset,
          color: theme.color.textMuted
        }
      }}
      {...restProps}
    />
  );
};

export default Input;
