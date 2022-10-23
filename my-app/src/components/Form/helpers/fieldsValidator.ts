import { getMinValidDate } from './getDateParams';

export const fieldsValidator = {
  text: {
    minLength: {
      value: 3,
      message: "Please correct, it's too short",
    },
    maxLength: {
      value: 20,
      message: "Please correct, it's too long",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Please correct, it's no valid data",
    },
  },
  zipCode: {
    minLength: {
      value: 6,
      message: 'ZipCode is too short',
    },
    maxLength: {
      value: 12,
      message: 'ZipCode is too long',
    },
  },
  birthday: {
    validate: (value: string) =>
      new Date(value).getTime() < getMinValidDate() || 'Sorry, you is so young',
  },
  country: { validate: (value: string) => value !== '0' || 'Please, choose country' },
};
