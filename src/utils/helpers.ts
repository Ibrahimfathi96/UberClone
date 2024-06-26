export const logger = (value: any, message: string = '') => {
  console.log(message && message + '  ::\n\n', JSON.stringify(value, null, 4));
};
