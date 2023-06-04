import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import schema from "./schema";
import {useNavigate} from "react-router";
import * as userAction from '../../../redux/actions/userAction';
import {connect} from "react-redux";


const Register = ({signup}) => {

  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    await signup(data);
  };

  if(localStorage.getItem('token')){
    navigate('/')
  }

  return (
    <div className='w-100'>
      <section className='w-100 pt-5 pb-5' style={{backgroundColor: '#eee'}}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: 25, width: '100%'}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>


                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                            <input type="text" className="form-control" {...register('name')}/>
                            {errors.name && <span className='text-danger'>{errors.name.message}</span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            <input type="email" className="form-control" {...register('email')}/>
                            {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            <input type="password" className="form-control" {...register('password')}/>
                            {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                            <input type="password" className="form-control" {...register('repeatPassword')}/>
                            {errors.repeatPassword &&
                            <span className='text-danger'>{errors.repeatPassword.message}</span>}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <div>
                            <button type="submit" className="btn btn-primary btn-lg d-block">Register</button>
                            <div>
                              <p className="small fw-bold mt-2 pt-1 mb-0 ">You have an account?
                                <a
                                  href="#!"
                                  className="link-danger"
                                  onClick={() => navigate('/login')}
                                >
                                  Login
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                           className="img-fluid" alt="Sample image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (data) => userAction.signup(dispatch, data),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
