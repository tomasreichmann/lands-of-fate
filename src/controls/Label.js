/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme, {reset} from "../theme";

const Label = ({ children, ...restProps }) => {
  return (
    <span
      css={{
        ...reset,
        display: 'block',
        ...theme.typography.heading,
      }}
      {...restProps}
    >{children}</span>
  );
};

export default Label;
