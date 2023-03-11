import axios from "axios";
import { API_BASE_URL } from "~~/config/url";
import { ILoginDTO } from "./dtos/login.dto";
import { SignupDTO } from "./dtos/signup.dto";

const AUTH_API_URL = API_BASE_URL + "auth";

const API = axios.create({
  baseURL: AUTH_API_URL,
  withCredentials: true,
  method: HttpMethod.POST,
});

export const logIn = (dto: ILoginDTO) => {
  return API.post<ILoginDTO>("/login", dto);
};

export const signUp = (dto: SignupDTO) => {
  return API.post<SignupDTO>("/signup", dto);
};

export const verify = () => {
  return API.post("verify");
};
