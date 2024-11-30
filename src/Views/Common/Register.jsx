import React, { useState } from "react";
import "./Auth.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleRegister, handleRegisterCredentials } from "../../Redux/Actions/Common_action";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
    const { userName, email, password, confirmPassword } = useSelector((state) => state.commonState);
    const dispatch = useDispatch();
    const navigate=useNavigate()
  

    const handleRegisterSubmit = async () => {
        if (!userName || !email || !password || !confirmPassword) {
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
            userName,
            email,
            password,
        };
  dispatch(handleRegister({data,navigate}));
     
    };

    return (
        <>
            <div className="signup-container">
                <div className="container-fluid">
                    <div className="row vh-100 d-flex justify-content-center align-items-center">
                        <div className="sign-up col-10 col-sm-8 col-md-6 col-lg-4 rounded-3">
                            <div className="text-center">
                                <h3 className="mt-4 fw-bold fs-2 text-white">WILDLENS TOUR</h3>
                                <p className="fw-bold fs-4 text-info">SIGN UP</p>
                            </div>
                            <div className="px-lg-5">
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            value={userName}
                                            onChange={(e) => dispatch(handleRegisterCredentials({ userName: e.target.value }))}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => dispatch(handleRegisterCredentials({ email: e.target.value }))}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => dispatch(handleRegisterCredentials({ password: e.target.value }))}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Control
                                            type="password"
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                dispatch(handleRegisterCredentials({ confirmPassword: e.target.value }))
                                            }
                                        />
                                    </Form.Group>
                                    <Button
                                        variant="success"
                                        className="w-100"
                                        type="button"
                                        onClick={handleRegisterSubmit}
                                    
                                    >
                                 SIGN UP</Button>
                                </Form>
                            </div>
                            <div className="mb-3">
                                <hr className="text-white" />
                                <div className="auth-nav-text text-center text-white">
                                    <span className="me-2 fw-bold">Already have an account?</span>
                                    <Link to="/" className="fs-5 fw-bold text-warning">
                                        Sign In
                                    </Link>
                                </div>
                                <div className="auth-nav-text text-center text-white">
                                    <span className="me-2 fw-bold">Activate your account?</span>
                                    <Link to="/account-activation" className="fs-5 fw-bold text-primary">
                                        Activate
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

export default Register;
