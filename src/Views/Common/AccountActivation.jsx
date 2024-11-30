import React from "react";
import "./Auth.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  HandleAccountActivation,
  handleRegisterCredentials,
  HandleResendOTP,
} from "../../Redux/Actions/Common_action";
import { Link, useNavigate } from "react-router-dom";

const AccountActivation = () => {
  const { email, otp } = useSelector((state) => state.commonState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAccoutActivate = () => {
    if (!email || !otp) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    const data = {
      email,
      otp: Number(otp),
    };
    dispatch(HandleAccountActivation({ data, navigate }));
  };

  const handleSumbitResendOTP = () => {
    if (!email) {
      toast.error("Email is required", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    dispatch(HandleResendOTP({ email: email }));
  };
  return (
    <>
      <div className="signup-container">
        <div className="container-fluid ">
          <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="login col-10 col-sm-8 col-md-6 col-lg-4 rounded-3 py-4">
              <div className="text-center">
                <h3 className="mt-4 fw-bold fs-2 text-white">WILDLENS TOUR</h3>
                <p className="fw-bold fs-4 text-info">Activate Your Account</p>
              </div>
              <div className="px-lg-4 ">
                <Form className="login-form">
                  <Form.Group className="mb-3" controlId="">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        dispatch(
                          handleRegisterCredentials({ email: e.target.value })
                        );
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Control
                      type="text"
                      placeholder="OTP"
                      value={otp}
                      onChange={(e) => {
                        dispatch(
                          handleRegisterCredentials({ otp: e.target.value })
                        );
                      }}
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    className="w-100 mb-3"
                    onClick={handleAccoutActivate}
                  >
                    Activate
                  </Button>
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={handleSumbitResendOTP}
                  >
                    Resend OTP
                  </Button>
                </Form>
              </div>

              <div className="mb-3">
                <hr className="text-white" />
                <div className="auth-nav-text text-center text-white">
                  <span className="me-2 fw-bold">Already Activated your account?</span>
                  <Link to="/" className="fs-5 fw-bold text-warning">
                    Sign In
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

export default AccountActivation;
