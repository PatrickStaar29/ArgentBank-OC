export async function fetchUserName(authToken, userName) {


  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({userName}) ,
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du profil utilisateur');
  }

  const data = await response.json();
  console.log('Réponse de l\'API (profil utilisateur) :', data)
  
}