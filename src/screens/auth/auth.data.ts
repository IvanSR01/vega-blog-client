export type Input = {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

export const inputDataLogin: Input[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    required: true,
  },
];

export const inputDataRegister: Input[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    required: true,
  },
];

