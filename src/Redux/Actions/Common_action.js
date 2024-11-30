import axios from "axios";
import {
  clearForm,
  updateLoginResponse,
  updateRegisterCredentials,
} from "../Slices/Common_slice";
import { toast } from "react-toastify";

export const handleRegisterCredentials = (value) => (dispatch) => {
  dispatch(updateRegisterCredentials(value));
};

export const handleRegister =
  ({ data, navigate }) =>
  async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:4000/user/signup", data);

      if (res?.data?.error_code === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        dispatch(clearForm());

        setTimeout(() => {
          navigate("/account-activation");
        }, 3000);
      }
    } catch (error) {
      toast.error(
        error.res?.data?.message || "Registration failed. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      dispatch(clearForm());
    }
  };

export const handleLogin = ({data,navigate}) => async (dispatch) => {
  
  try {
    const res = await axios.post("http://localhost:4000/user/login", data);
    console.log(res);
    if (res?.data?.error_code === 200) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      dispatch(updateLoginResponse(res.data));
      setTimeout(()=>{
            navigate('/home')
      },3000)
    }
  } catch (error) {
    toast.error(error.res?.data?.message || "Login failed. Please try again.", {
      position: "top-right",
      autoClose: 3000,
    });
    dispatch(clearForm());
  }
};

export const HandleAccountActivation =
  ({ data, navigate }) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/user/accountactivation",
        data
      );
      console.log(res);
      if (res?.data?.error_code === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        dispatch(clearForm());
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toast.error(
        error.res?.data?.message || "Activation failed. Please try again.",
        {
          position: "top-right",
          autoClose: 3000,
        }
      );
      dispatch(clearForm());
    }
  };

export const HandleResendOTP = (email) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:4000/user/resend-otp",
      email
    );
    if (res?.data?.error_code === 200) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      dispatch(clearForm());
    }
  } catch (error) {
    toast.error(
      error.res?.data?.message || "resend OTP failed .Please try again.",
      {
        position: "top-right",
        autoClose: 3000,
      }
    );
    dispatch(clearForm());
  }
};

export const handleForgotPassword =
  ({ email, navigate }) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/user/forgot-password",
        { email: email }
      );
      if (res?.data?.error_code === 200) {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          navigate("/change-password");
        }, 3000);
        dispatch(clearForm());
      }
    } catch (error) {
      toast.error(error.res?.data?.message || "Please try again later.", {
        position: "top-right",
        autoClose: 3000,
      });
      dispatch(clearForm());
    }
  };

export const handleChangePassword = (data) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:4000/user/change-password",
      data
    );

    if (res?.data?.error_code === 200) {
      toast.success(res.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      dispatch(clearForm());

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  } catch (error) {
    toast.error(error.res?.data?.message || "Please try again later.", {
      position: "top-right",
      autoClose: 3000,
    });
    dispatch(clearForm());
  }
};
