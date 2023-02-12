import { RegisterOptions, UseFormRegister } from 'react-hook-form';

export type FormInputs = {
  name: string;
  email: string;
  company: string;
  title: string;
  content: string;
};

export type Input = {
  // keyof: name type will be key of FormInputs as key: type pair
  name: keyof FormInputs;
  label: string;
  register: UseFormRegister<FormInputs>;
  type: string;
  errorMsg?: string;
  placeholder: string;
  validation?: RegisterOptions;
};
