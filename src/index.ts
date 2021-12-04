import { readFile } from "fs";

export const toInt = (value: string) => parseInt(value, 10) || 0;

export const objectToJson = (object: Object) => JSON.stringify(object);

export const parseJson = (value: string): JSON => {
  try {
    return JSON.parse(value);
  } catch (error) {
    throw new Error("value is not a JSON");
  }
};

export const objectHaveEmptyValues = (object: Object): boolean => {
  const values = Object.values(object);

  const isEmpty = values.filter((item) => item === "" || !item);

  return !!isEmpty.length;
};

export const readHtmlFile = (
  path: string,
  options: {},
  callback: CallableFunction
) => {
  readFile(path, options, (error, html) => {
    if (error) {
      callback(error);
      throw new Error(`${error}`);
    } else {
      callback(null, html);
    }
  });
};
