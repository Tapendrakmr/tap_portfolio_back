export type IAuthUser = {
  email: string;
  password: string;
  user: IUser;
};
export type IUser = {
  name: string;
  phone: string;
  country_code: string;
  role: string;
};
