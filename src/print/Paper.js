/** @jsx jsx */
import { jsx } from "@emotion/core";
import theme, { reset } from "../theme";
import { A4 } from "./paperSizes";

const RuleVertical = ({
  top = undefined,
  right = undefined,
  bottom = undefined,
  left = undefined,
  size = "0.5cm",
  ...restProps
}) => {
  return (
    <div
      css={{
        zIndex: 100,
        position: "absolute",
        borderLeft: "1px solid #888",
        height: size,
        marginBottom: bottom ? `-${size}` : 0,
        marginTop: top ? `-${size}` : 0,
        top: top && 0,
        right: right && 0,
        bottom: bottom && 0,
        left: left && 0
      }}
      {...restProps}
    />
  );
};

const RuleHorizontal = ({
  top = undefined,
  right = undefined,
  bottom = undefined,
  left = undefined,
  size = "0.5cm",
  ...restProps
}) => {
  return (
    <div
      css={{
        zIndex: 100,
        position: "absolute",
        borderTop: "1px solid #888",
        width: size,
        marginRight: right ? `-${size}` : 0,
        marginLeft: left ? `-${size}` : 0,
        top: top && 0,
        right: right && 0,
        bottom: bottom && 0,
        left: left && 0
      }}
      {...restProps}
    />
  );
};
const normalizeToString = value =>
  typeof value === "number" || /^\d+$/.test(value) ? `${value}px` : value;

const shorthandToArray = value => {
  const normalizedValues =
    typeof value === "number" || /^\d+$/.test(value)
      ? [normalizeToString(value)]
      : value.split(/\s+/).map(item => normalizeToString(item));
  return [
    ...normalizedValues,
    ...normalizedValues,
    ...normalizedValues,
    ...normalizedValues
  ].slice(0, 4);
};

const Paper = ({
  size = A4,
  printerMargin = "1cm",
  padding = 0,
  children,
  rule = false,
  ...restProps
}) => {
  const [
    printerMarginTop,
    printerMarginRight,
    printerMarginBottom,
    printerMarginLeft
  ] = shorthandToArray(printerMargin);

  const [
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  ] = shorthandToArray(padding);

  return (
    <div
      css={{
        position: "relative",
        overflow: rule ? "normal" : "hidden",
        width: `calc(${
          size.width
        } - ${printerMarginLeft} - ${printerMarginRight} - ${paddingLeft} - ${paddingRight})`,
        height: `calc(${
          size.height
        } - ${printerMarginTop} - ${printerMarginBottom} - ${paddingTop} - ${paddingBottom})`,
        padding,
        pageBreakInside: "avoid",
        backgroundColor: "#ffffff",

        "@media screen": {
          borderColor: "#eee",
          borderStyle: "solid",
          borderWidth: `${printerMarginTop} ${printerMarginRight} ${printerMarginBottom} ${printerMarginLeft}`,
          boxShadow: theme.shadow.middle
        }
      }}
      {...restProps}
    >
      {rule && (
        <>
          <RuleVertical left top />
          <RuleVertical right top />
          <RuleVertical left bottom />
          <RuleVertical right bottom />
          <RuleHorizontal left top />
          <RuleHorizontal right top />
          <RuleHorizontal left bottom />
          <RuleHorizontal right bottom />
        </>
      )}
      {children}
    </div>
  );
};

export default Paper;
