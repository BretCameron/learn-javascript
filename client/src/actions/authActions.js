import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";

export const register = ({ firstName, lastName, email, password, newsletter }) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ firstName, lastName, email, password, newsletter });

  axios.post('/users', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    }))
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err
      });
    })
};