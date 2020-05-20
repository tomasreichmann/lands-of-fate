const color = {
  paper: "#edcfba",
  paperInverse: "#44352f",
  box: "#c0b190",
  text: "#201111",
  textMuted: "#625050",
  textInverse: "#edcfba",
  primary: "#9d3a33",
  highlight: "#c0735c"
};

const bodyFont = "Roboto, sans-serif";
const headingFont = '"EB Garamond", serif';

const bodyTypography = {
  fontFamily: bodyFont,
  fontSize: "1em",
  lineHeight: "1.375em"
};

const headingTypography = {
  fontFamily: headingFont
};

const typography = {
  body: bodyTypography,
  heading: headingTypography,
  h1: {
    fontSize: "3em",
    lineHeight: "1.05em",
    ...headingTypography
  },
  h2: {
    fontSize: "2.25em",
    lineHeight: "1.25em",
    ...headingTypography
  },
  h3: {
    fontSize: "1.75em",
    lineHeight: "1.25em",
    ...headingTypography
  },
  h4: {
    fontSize: "1.125em",
    lineHeight: "1.22222222em",
    ...headingTypography
  }
};

const global = {
  "html, body": {
    fontSize: "100%",
    fontFamily: bodyFont,
    height: "100%",
    margin: 0,
    padding: 0,
    color: color.text
  },
  "body > div": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContents: "flex-start",
    alignItems: "stretch"
  }
};

const spacing = 38;

const button = {
  appearance: "none",
  clipPath: `polygon(1em 0, calc(100% - 1em) 0, 100% 50%, calc(100% - 1em) 100%, 1em 100%, 0 50%)`
};

const main = {
  flex: "1 0 auto",
  backgroundColor: color.paper,
  padding: spacing
};

const shadow = {
  low: `rgba(0, 0, 0, 0.1) 0px 1px 2px 0px`,
  middle: `rgba(0, 0, 0, 0.15) 0px 2px 4px 0px`,
  high: `rgba(0, 0, 0, 0.25) 0px ${spacing}px ${spacing/2}px 0px`,
}

export const reset = {
  backgroundColor: "transparent",
  border: 0,
  outline: 0,
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  color: "inherit",
  padding: 0,
  margin: 0,
  listStyle: "none"
};

export const stacking = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  alignItems: "flex-start"
};

export default {
  global,
  color,
  typography,
  button,
  spacing,
  main,
  shadow,
};
