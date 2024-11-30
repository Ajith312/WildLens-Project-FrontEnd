import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";



const commonSlice = createSlice({
    name: "commonSlice",
    initialState: {
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        token: Cookies.get("token") ? Cookies.get("token") : "",
        userRole: Cookies.get("role") ? Cookies.get("role") : "",
        otp:null
    },
    reducers: { 
        updateRegisterCredentials(state, action) {
            const type = Object.keys(action.payload)[0];
            switch (type) {
                case "userName":
                    state.userName = action.payload.userName;
                    break;
                case "email":
                    state.email = action.payload.email;
                    break;
                case "password":
                    state.password = action.payload.password;
                    break;
                case "confirmPassword":
                    state.confirmPassword = action.payload.confirmPassword;
                    break;
                    case"otp":
                    state.otp=action.payload.otp
                    break;
                default:
                    break;
            }
        },
        updateLoginResponse(state,action){
            if(action.payload?.token){
                Cookies.set("token",action.payload?.token)
            }
            if(action.payload?.role){
                Cookies.set("token",action.payload?.role)
            }
            
            return{
                ...state,
                email:"",
                password:"",
                token:action.payload?.token,
                userRole:action.payload?.role

            }
        },
        clearForm(state,action){
            return{
                ...state,
                userName:"",
                email: "",
                password: "",
                confirmPassword: "",
                otp:""
            }

        }
    }
});

const { actions, reducer } = commonSlice;

export const { updateRegisterCredentials,updateLoginResponse,clearForm} = actions;
export default reducer;
