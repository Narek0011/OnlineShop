import axiosClient from "../../axios-client";
import axios from "axios";

export const GET_USER = 'GET_USER';
export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export function signup(dispatch, data) {
  axiosClient.post('/signup', data)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.user.id);
      dispatch({
        type: SIGNUP_USER,
        payload: res.data
      })
    })
    .catch(err => {
      console.error(err.message)
    })
}

export function login(dispatch, data) {
  axiosClient.post('/login', data)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user_id', res.data.user.id);
      axios.defaults.headers.post['Authorization'] = `Bearer ${res.data.token}`;
      dispatch({
        type: LOGIN_USER,
        payload: res.data.user,
      })
    })
    .catch(err => {
      console.error(err.message)
    })
}

export function logout(dispatch) {
  axiosClient.post('/logout')
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      dispatch({
        type: LOGOUT_USER,
      })
    })
    .catch(err => {
      console.error(err.message)
    })
}

export function getUser(dispatch) {
  if (localStorage.getItem('token')) {
    axiosClient.get('/user')
      .then(res => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      })
      .catch(err => {
        console.error(err.message)
      })
  }
}