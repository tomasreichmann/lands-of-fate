/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme, { reset } from "../theme";

const CheckBox = ({ value = undefined, inputProps, ...restProps }) => {
  const props = {};
  if (value !== undefined) {
    props.checked = value;
  }
  return (
    <label css={{
      ...reset,
      position: 'relative',
      cursor: 'pointer',
      width: '1em',
      height: '1.5em',
      fontSize: '0.8em',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: `1px solid ${theme.color.textMuted}`,
      background: theme.color.paper,
    }} {...restProps}>
      <input
        type="checkbox"
        onChange={event => event.target.checked}
        {...props}
        css={{
          position: 'absolute',
          clip: 'rect(1px, 1px, 1px, 1px)',
        }}
        {...inputProps}
      />
      {value && '✕'}
    </label>
  );
};

export default CheckBox;
