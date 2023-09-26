import { setUserFirstName, setUserLastName, setUserName } from "../reducers/userSlice";




export async function fetchUserProfile(authToken, dispatch) {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authToken }),
    });
  
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération du profil utilisateur');
    }
  
    const profileData = await response.json();
    console.log('Réponse de l\'API (profil utilisateur) :', profileData)
  
    const authFirstName = profileData.body.firstName
    dispatch(setUserFirstName(authFirstName))
  
    const authLastName = profileData.body.lastName
    dispatch(setUserLastName(authLastName))
  
    const authUserName = profileData.body.userName
    dispatch(setUserName(authUserName))
  
    
  }
  