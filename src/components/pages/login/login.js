import React from 'react';
import {useNavigate} from "react-router";
import {connect} from "react-redux";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import schema from "./schema";
import * as userAction from '../../../redux/actions/userAction';


const Login = ({login}) => {

  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    login(data);
    navigate('/');
  };


  return (
    <div>
      <section>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                   className="img-fluid" alt="Sample image"/>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    {...register('email')}
                  />
                  {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    {...register('password')}
                  />
                  {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{paddingLeft: ' 2.5rem', paddingRight: '2.5rem'}}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                    <a
                      href="#!"
                      className="link-danger"
                      onClick={() => navigate('/register')}
                    >
                      Register
                    </a>
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => userAction.login(dispatch, data)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

