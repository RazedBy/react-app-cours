export const checkPassword = async (username: any, password: any) => {
    try {
        // Utilisation de POST pour envoyer les données dans le corps de la requête
        const response = await fetch('http://localhost:3001/verify-password', {
            method: 'POST', // On utilise la méthode POST
            headers: {
                'Content-Type': 'application/json', // On envoie des données JSON
            },
            body: JSON.stringify({
                username: username,  // Ajout du username dans le corps de la requête
                password: password   // Ajout du password dans le corps de la requête
            }),
        });

        // Si la réponse est valide, on récupère les données
        const data = await response.json();
        return data; // Retourne les données récupérées

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

export const registerUser = async (username: any, email:any,password: any,firstName:any,lastName:any) => {
    try {
        // Utilisation de POST pour envoyer les données dans le corps de la requête
        const response = await fetch('http://localhost:3001/users', {
            method: 'POST', // On utilise la méthode POST
            headers: {
                'Content-Type': 'application/json', // On envoie des données JSON
            },
            body: JSON.stringify({
                username: username,
                email: email,  // Ajout du username dans le corps de la requête
                password: password,   // Ajout du password dans le corps de la requête
                firstName: firstName,
                lastName: lastName

            }),
        });

        // Si la réponse est valide, on récupère les données
        const data = await response.json();
        return data; // Retourne les données récupérées

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

export const getUserInformation = async (accessToken: any) => {
    try {
        const response = await fetch('http://localhost:3001/getUserInformations',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accessToken
            }
        })
        const data = await response.json();
        return data;
    } catch (error) {
        
    }
}