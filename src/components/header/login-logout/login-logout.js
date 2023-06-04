import React, {useState} from "react";
import {useNavigate} from "react-router";
import * as userAction from "../../../redux/actions/userAction";
import {connect} from "react-redux";

function LoginRegister({logout}) {

  const [logoutBtn] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate('/login')
  };

  const navigateToRegisterPage = () => {
    navigate('/register')
  };

  const logoutUser = () => {
    logout()
    navigate('/');
  };

  return (
    <div className='rounded-0'>
      <div className='p-2 rounded-0 border-0'>

        {
          !logoutBtn && (
            <button
              className='rounded-0 d-block w-100 border-0 p-1 fs-6'
              onClick={navigateToLoginPage}
            >
              Login
            </button>
          )
        }

        {
          !logoutBtn && (
            <button
              className='rounded-0 d-block w-100 border-0 p-1 fs-6 mt-3'
              onClick={navigateToRegisterPage}
            >
              Register
            </button>
          )
        }

        {
          logoutBtn && (
            <button onClick={logoutUser} className='rounded-0 d-block w-100 border-0 p-1 fs-6 mt-3'>
              Logout
            </button>
          )
        }

      </div>
    </div>
  )
}


const mapStateToProps = state => {
  return {
    cars: state,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: (data) => userAction.logout(dispatch, data),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);

