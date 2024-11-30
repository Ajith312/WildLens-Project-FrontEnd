import React from "react";
import "./Auth.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleLogin,
  handleRegisterCredentials,
} from "../../Redux/Actions/Common_action";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const { email, password } = useSelector((state) => state.commonState);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleLoginSubmit = () => {
    if (!email || !password) {
      toast.error("All fields are required", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }
    const data = { email, password };
    dispatch(handleLogin({data,navigate}));
  };

  return (
    <>
      <div className="signup-container">
        <div className="container-fluid ">
          <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="login col-10 col-sm-8 col-md-6 col-lg-4 rounded-3 py-4">
              <div className="text-center">
                <h3 className="mt-4 fw-bold fs-2 text-white">WILDLENS TOUR</h3>
                <p className="fw-bold fs-4 text-info">LOGIN</p>
              </div>
              <div className="px-lg-5 ">
                <Form className="login-form">
                  <Form.Group className="mb-3" controlId="">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) =>
                        dispatch(
                          handleRegisterCredentials({ email: e.target.value })
                        )
                      }
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) =>
                        dispatch(
                          handleRegisterCredentials({
                            password: e.target.value,
                          })
                        )
                      }
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    className="w-100"
                    onClick={handleLoginSubmit}
                  >
                    LOGIN
                  </Button>
                </Form>
              </div>
              <div className="mb-3">
                <hr className="text-white" />
                <div className="auth-nav-text text-center text-white">
                  <span className="me-2 fw-bold">Don't have an account?</span>
                  <Link to={"/signup"} className="fs-5 fw-bold text-warning">
                    Sign Up
                  </Link>
                </div>
              </div>
              <div className="auth-nav-text text-center text-white">
                <span className="me-2 fw-bold">Forget Password?</span>
                <Link
                  to="/forget-password"
                  className="fs-5 fw-bold text-primary"
                >
                  Change password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default Login;
