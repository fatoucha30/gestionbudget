import{ useEffect, useState } from 'react';
import { postData } from '../services/apiService'; // Importation des fonctions API

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await postData(); // Récupère les données de l'API
                setData(result); // Met à jour l'état avec les données
            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
            }
        };

        fetchData(); // Appelle la fonction pour récupérer les données au chargement du composant
    }, []);

    const handleSubmit = async () => {
        const newData = { title: 'Exemple', Montant: 100 }; // Données à envoyer
        try {
            const result = await postData(newData); // Envoie les données à l'API
            console.log('Données envoyées avec succès:', result);
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données :', error);
        }
    };
    console.log(data)
    if (!data) {
        return <div>p...</div>; // Ou un autre indicateur de chargement
    }

    return (
        <div>

            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.title} - {item.Montant}€</li>
                ))}
            </ul>
            <button onClick={handleSubmit}></button>
        </div>
    );
};

export default MyComponent;
