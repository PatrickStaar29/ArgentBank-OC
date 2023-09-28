import { setUserName } from "../reducers/userSlice";





export async function fetchUserName(authToken, userName, dispatch) {

  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({"userName" : userName}) ,
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du profil utilisateur');
  }
    
  const profileData = await response.json();
    console.log('Réponse de l\'API (profil utilisateur) :', profileData)
  
  
    const authUserName = profileData.body.userName
    dispatch(setUserName(authUserName))
}