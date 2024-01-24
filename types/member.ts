export interface ISignupForm {
  name: string,
  email: string,
  password: string,
  phone: string,
  birthday: string,
  address: {
    zipcode: number | null,
    detail: string,
  },
}

export interface ILoginForm {
  email: string,
  password: string,
}