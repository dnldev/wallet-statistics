/* eslint-disable import/prefer-default-export */
export const roundToTwo = num => +`${Math.round(`${num}e+2`)}e-2`;

export const daysBetween = (date1, date2) =>
  Math.abs(Math.floor(date1 - date2)) / (24 * 60 * 60 * 1000);

export const copy = obj => JSON.parse(JSON.stringify(obj));
