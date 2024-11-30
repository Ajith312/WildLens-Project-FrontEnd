import React from 'react'
import "./Auth.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { handleForgotPassword, handleRegisterCredentials } from '../../Redux/Actions/Common_action';

const ForgetPassword = () => {
    const {email}=useSelector((state)=>state.commonState)
    const dispatch =useDispatch()
    const navigate=useNavigate()

    const handleSubmitForgetPassword = ()=>{
        if(!email){
            toast.error("Email is required", {
                position: "top-right",
                autoClose: 3000,
              });
              return;
        }
            dispatch(handleForgotPassword({email,navigate}))
    }
  return (
    <>
    <div className="signup-container">
    <div className="container-fluid ">
      <div className="row vh-100 d-flex justify-content-center align-items-center">
        <div className="login col-10 col-sm-8 col-md-6 col-lg-4 rounded-3 py-4">
          <div className="text-center">
            <h3 className="mt-4 fw-bold fs-2 text-white">WILDLENS TOUR</h3>
            <p className="fw-bold fs-4 text-info">Forget Password</p>
          </div>
          <div className="px-lg-5 ">
            <Form className="login-form">
              <Form.Group className="mb-3" controlId="">
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e)=>{dispatch(handleRegisterCredentials({email:e.target.value}))}}/>
              </Form.Group>
              <Button variant="success" 
              className="w-100" 
              onClick={handleSubmitForgetPassword}>
               SUBMIT
              </Button>
            </Form>
          </div>
          <div className="mb-3">
            <hr className="text-white" />
            <div className="auth-nav-text text-center text-white"><span className="me-2">Don't have an account?</span>
            <Link to={'/signup'} className='fs-5 fw-bold text-warning'>Sign Up</Link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ToastContainer />
  </>
  )
}

export default ForgetPassword
