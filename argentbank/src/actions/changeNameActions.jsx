import { setUserName } from "../reducers/userSlice";

export const fetchUserName = (authToken, userName) => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "userName": userName }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du profil utilisateur');
      }

      const profileData = await response.json();
      const authUserName = profileData.body.userName;

      dispatch(setUserName(authUserName));

      console.log('Nom d\'utilisateur mis à jour avec succès :', authUserName);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la mise à jour du nom d\'utilisateur :', error);
    }
  };
};
