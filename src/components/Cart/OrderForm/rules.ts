import { RegisterOptions } from "react-hook-form";

export const nameRules: RegisterOptions = {
  required: "This field is required",
  minLength: {
    value: 2,
    message: "Min length of name is 2 chars",
  },
  maxLength: {
    value: 18,
    message: "Max length of name is 18 chars",
  },
  pattern: {
    value: /^[a-z\s]{2,18}$/i,
    message: "Invalid name",
  },
};

export const emailRules: RegisterOptions = {
  required: "This field is required",
  pattern: {
    value: /^[a-z0-9_]+@[a-z0-9]{2,11}.[a-z]{2,7}$/i,
    message: "Invalid email",
  },
};

export const phoneRules: RegisterOptions = {
  required: "This field is required",
  pattern: {
    value: /^[0-9]{9,10}$/i,
    message: "Invalid phone",
  },
};

export const addressRules: RegisterOptions = {
  required: "This field is required",
  minLength: {
    value: 10,
    message: "Min length of address is 10 chars",
  },
  maxLength: {
    value: 50,
    message: "Max length of address is 50 chars",
  },
  pattern: {
    value: /^[a-z0-9,-.\s/]{10,50}$/i,
    message: "Invalid address",
  },
};
