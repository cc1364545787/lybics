const prefix = 'laravel-';

export const setItem = (key, _value, _prefix) => {
  const value = JSON.stringify(_value);
  return localStorage.setItem(_prefix || prefix + key, value);
};

export const getItem = (key, _prefix) => {
  const _value = localStorage.getItem(_prefix || prefix + key);
  const value = JSON.parse(_value);
  return value;
};
