export const toInt = (value: string) => parseInt(value, 10) || 0;

export const objectToJson = (object: Object) => JSON.stringify(object);

export const parseJson = (json: string): JSON => {
  try {
    return JSON.parse(json);
  } catch (error) {
    throw new Error("INVALID_JSON");
  }
};
