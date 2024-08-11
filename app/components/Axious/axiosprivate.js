import axios from "axios";
export const axiosPrivate = axios.create({
  baseURL: "http://localhost:51000",
  withCredentials: true,
});
export const UseAxiosPrivate = () => {

  

  return axiosPrivate;
};
export default UseAxiosPrivate;