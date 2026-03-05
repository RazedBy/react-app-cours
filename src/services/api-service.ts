const API_URL = process.env.REACT_APP_API_URL;

export const checkPassword = async (username: any, password: any) => {
    try {
        const response = await fetch(`${API_URL}/verify-password`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                username: username,
                password: password   
            }),
        });

        const data = await response.json();
        return data; 

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

export const registerUser = async (username: any, email:any,password: any,firstName:any,lastName:any) => {
    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                username: username,
                email: email, 
                password: password, 
                firstName: firstName,
                lastName: lastName

            }),
        });

        const data = await response.json();
        return data; 

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }
};

export const getUserInformation = async (accessToken: any) => {
    try {
        const response = await fetch(`${API_URL}/getUserInformations`,{
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