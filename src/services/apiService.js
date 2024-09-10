import axios from 'axios';

// Configuration de l'instance Axios
const api = axios.create({
  baseURL: 'http://localhost:3000', // L'URL de base de votre backend NestJS
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour envoyer des données POST
export const postData = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'appel API:', error);
    throw error;
  }
};
