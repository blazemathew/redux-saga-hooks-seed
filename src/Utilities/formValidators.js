/**
 * @fileoverview This file houses functions that can be used for
 * validation of form fields.
 *
 * Note that these functions should return a string error message
 * when they fail, and `undefined` when they pass.
 */

const SUCCESS = undefined;

export const hasLengthAtLeast = (value, values, minimumLength) => {
  if (!value || value.length < minimumLength) {
    return `Must contain at least ${minimumLength} character(s).`;
  }

  return SUCCESS;
};

export const hasLengthAtMost = (value, values, maximumLength) => {
  if (value && value.length > maximumLength) {
    return `Must not exceed ${maximumLength} character(s).`;
  }

  return SUCCESS;
};

export const hasLengthExactly = (value, values, length) => {
  if (value && value.length !== length) {
    return `Must contain exactly ${length} character(s).`;
  }

  return SUCCESS;
};

export const isRequired = (value) =>
  (value || '').trim() ? SUCCESS : 'The field is required.';

export const isRequiredDate = (value) =>
  (String(value) || '').trim() ? SUCCESS : 'The field is required.';

export const validateEmail = (value) => {
  //eslint-disable-next-line
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(value)
    ? SUCCESS
    : 'Please enter a valid email address (Ex: johndoe@domain.com).';
};

export const validateDateofbirth = (value) => {
  const regex = /^(0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-])(0[1-9]|1[0-2])([/+-])(19|20)[0-9]{2}$/;

  return regex.test(String(value))
    ? SUCCESS
    : 'Please enter a valid date format (Ex: mm/dd/yyyy).';
};

export const validateEmailWithMobile = (value) => {
  //  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  //eslint-disable-next-line
  const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

  return regex.test(value) ? SUCCESS : 'Please enter a valid email or mobile.';
};

export const validateOtp = (value) => {
  //  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  const regex = /^([0-9]{4})+$/;

  return regex.test(value) ? SUCCESS : 'Please enter a valid email or mobile.';
};

export const validatePincode = (value) => {
  //  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  const regex = /^\d{6}$/;

  return regex.test(value) ? SUCCESS : 'Please enter a valid pin number.';
};

export const mobileNumber = (value) => {
  //  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
  const regex = /^\d{10}$/;

  return regex.test(value) ? SUCCESS : 'Please enter a valid mobile number.';
};

export const isMobileNumber = (value) => {
  const regex = /^([0-9]{10})+$/;

  return regex.test(value) ? true : false;
};

export const validateRegionCode = (value, values, countries) => {
  const country = countries.find(({ id }) => id === 'US');

  if (!country) {
    return 'Country "US" is not an available country.';
  }
  const { available_regions: regions } = country;

  if (!(Array.isArray(regions) && regions.length)) {
    return 'Country "US" does not contain any available regions.';
  }

  const region = regions.find(({ code }) => code === value);
  if (!region) {
    return `State "${value}" is not an valid state abbreviation.`;
  }

  return SUCCESS;
};

export const validatePassword = (value) => {
  const count = {
    lower: 0,
    upper: 0,
    digit: 0,
    special: 0
  };

  for (const char of value) {
    if (/[a-z]/.test(char)) {
      count.lower++;
    } else if (/[A-Z]/.test(char)) {
      count.upper++;
    } else if (/\d/.test(char)) {
      count.digit++;
    } else if (/\S/.test(char)) {
      count.special++;
    }
  }

  if (Object.values(count).filter(Boolean).length < 3) {
    return 'A password must contain at least 3 of the following: lowercase, uppercase, digits, special characters.';
  }

  return SUCCESS;
};

export const validateConfirmPassword = (
  value,
  values,
  passwordKey = 'password'
) => (value === values[passwordKey] ? SUCCESS : 'Passwords must match.');
