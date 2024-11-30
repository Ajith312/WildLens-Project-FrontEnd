import React from "react";
import "./Auth.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { handleChangePassword, handleRegisterCredentials } from "../../Redux/Actions/Common_action";
import { number } from "yup";

const ChangePassword = () => {

const {otp,password,confirmPassword}=useSelector((state)=>state.commonState)
const dispatch = useDispatch()

const handleSubmitChangePassword = ()=>{
    if (!otp|| !password || !confirmPassword) {
        toast.error("All fields are required", { position: "top-right", autoClose: 3000 });
        return;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match", { position: "top-right", autoClose: 3000 });
        return;
    }

    if (password.length < 8) {
        toast.error("Password must be at least 8 characters long", {
            position: "top-right",
            autoClose: 3000,
        });
        return;
    }

    const data = {
        pwdVerifyString:Number(otp),
        password}

    dispatch(handleChangePassword({data,navigate}))



}
  return (
    <>
      <div className="signup-container">
        <div className="container-fluid ">
          <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="login col-10 col-sm-8 col-md-6 col-lg-4 rounded-3 py-4">
              <div className="text-center">
                <h3 className="mt-4 fw-bold fs-2 text-white">WILDLENS TOUR</h3>
                <p className="fw-bold fs-4 text-info">Change Password</p>
              </div>
              <div className="px-lg-5 ">
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" 
                    placeholder="OTP"
                    value={otp} 
                    onChange={(e)=>{dispatch(handleRegisterCredentials({otp:e.target.value}))}}/>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Password" 
                    value={password}  
                    onChange={(e)=>{dispatch(handleRegisterCredentials({password:e.target.value}))}}/>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e)=>{dispatch(handleRegisterCredentials({confirmPassword:e.target.value}))}}
                    />
                  </Form.Group>
                  <Button variant="success" 
                  className="w-100" 
                  type="button"
                  onClick={handleSubmitChangePassword}>
                    SUBMIT
                  </Button>
                </Form>
              </div>
              <div className="mb-3">
                <hr className="text-white" />
                <div className="auth-nav-text text-center text-white">
                  <span className="me-2">Don't have an account?</span>
                  <Link to={"/signup"} className="fs-5 fw-bold text-warning">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ChangePassword;
