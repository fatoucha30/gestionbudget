import { useState } from "react";
import { postData } from '../services/apiService'; // Importer la fonction postData
import logo from '../assets/Images/logo.jpg';

const AddRevenu = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

        // Création de l'objet avec les données du formulaire
        const newRevenu = {
            title,
            amount: parseFloat(amount), // Convertir le montant en nombre
        };

        try {
            // Appel à l'API pour ajouter un nouveau revenu
            const response = await postData('/addRevenu', newRevenu);
            console.log('Revenu ajouté:', response);

            // Réinitialiser les champs du formulaire après l'ajout
            setTitle('');
            setAmount('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout du revenu:', error);
        }
    };

    return (
        <div className='flex items-center justify-center flex-col'>
            <img src={logo} className='w-32' alt="" />
            <h2 className='z-0.5 mt-2'>Gestion du budget</h2>
            <h1 className='text-2xl my-14 text-green-700'>Ajouter Revenu</h1>
            <div className=''>
                <form className="border-black" onSubmit={handleSubmit}>
                    <p className="text-green-700 ">TITRE</p>
                    <input
                        type="text"
                        placeholder="Salaire"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} // Mettre à jour le titre dans l'état
                        className='border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <br /><br />
                    <p className="text-green-700">MONTANT</p>
                    <input
                        type="number"
                        placeholder="Montant"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} // Mettre à jour le montant dans l'état
                        className='border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <br /><br /><br />
                    <button type="submit" className="bg-teal-700 text-white rounded h-10 w-40">
                        Ajouter Revenu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRevenu;
