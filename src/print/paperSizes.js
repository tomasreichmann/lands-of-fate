export const A0 = {
  width: '841mm',
  height: '1189mm',
};
export const A1 = {
  width: '594mm',
  height: '841mm',
};
export const A2 = {
  width: '420mm',
  height: '594mm',
};
export const A3 = {
  width: '297mm',
  height: '420mm',
};
export const A4 = {
  width: '210mm',
  height: '297mm',
};
export const A5 = {
  width: '148mm',
  height: '210mm',
};
export const A6 = {
  width: '105mm',
  height: '148mm',
};
export const A7 = {
  width: '74mm',
  height: '105mm',
};
export const A8 = {
  width: '52mm',
  height: '74mm',
};
export const A9 = {
  width: '37mm',
  height: '52mm',
};
export const A10 = {
  width: '26mm',
  height: '37mm',
};
export const pokerCard = {
  width: '2.5in',
  height: '3.5in',
};
export const bridgeCard = {
  width: '2.25in',
  height: '3.5in',
};

export const flipOrientation = (format) => {
  return {
    ...format,
    width: format.height,
    height: format.width,
  }
}
