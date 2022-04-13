import { userActionTypes } from "../actionTypes/userActionTypes";
const initialUserData = {
  name: "",
  email: "",
  phone: "",
  photo:"",
  password: "",
  auth:false
};
const userReducer = (state = initialUserData, { type, userData }) => {
  switch (type) {
    case userActionTypes.ADD_USER_DATA:
      return {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        password: userData.password,
        photo:userData.photo,
        auth:userData.auth
      };
    case userActionTypes.REMOVE_USER_DATA:
      return {
        name: "",
        email: "",
        photo:"",
        phone: "",
        password: "",
        auth:false
      };
    default:
      return state;
  }
};
export default userReducer;
