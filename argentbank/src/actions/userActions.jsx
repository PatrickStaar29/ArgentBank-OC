import { setUserToken, setUserFirstName, setUserLastName, setUserName } from "../reducers/userSlice"
import { fetchUserProfile } from "./profileActions"




export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  }
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  }
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  }
}

export function logoutSuccess(){
  return {
    type: LOGOUT,
  }
}

export const loginUser = (email, password,successCallback) => async (dispatch) => {
  dispatch(loginRequest());

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
    successCallback()
    const data = await response.json();
    dispatch(loginSuccess(data));
    console.log('Réponse de l\'API :', data)
    
    const authToken = data.body.token;
    dispatch(setUserToken(authToken));
    
    fetchUserProfile(authToken, dispatch)
    
  } catch (error) {
    dispatch(loginFailure(error));
    console.error('Erreur lors de la connexion à l\'API :', error);
  }
}
  export const logoutUser = () => async (dispatch) => {
  try {
    dispatch(setUserToken(null))
    dispatch(setUserFirstName(null))
    dispatch(setUserLastName(null))
    dispatch(setUserName(null))

    dispatch(logoutSuccess())
  } catch (error) {
    console.error('Erreur lors de la déconnexion :', error)
  }
}