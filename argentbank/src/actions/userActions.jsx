// src/actions/authActions.js
import { setUserToken } from "../reducers/userSlice";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export const loginUser = (email, password) => async (dispatch) => {
    dispatch(loginRequest()); // Dispatch une action de demande de connexion
  
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données à l\'API');
      }
  
      const data = await response.json();
      const authToken = data.body.token
      dispatch(loginSuccess(data));
      dispatch(setUserToken(authToken)); // Stockez le token dans le store en utilisant setUserToken
      console.log('Réponse de l\'API :', data);
    } catch (error) {
      // Dispatch une action d'échec de connexion en cas d'erreur
      dispatch(loginFailure(error));
      console.error('Erreur lors de la connexion à l\'API :', error);
    }
  };