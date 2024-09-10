import { useState } from "react";
import { postData } from '../services/apiService';
import logo from '../assets/Images/logo.jpg';

const AddDepense = () => {
    const [title, setTitle] = useState('');
    const [author, setMontant] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        // Création de l'objet avec les données du formulaire
        const newDepense = {
            title,
            author: parseFloat(author), // Assurez-vous que le montant est bien un nombre
        };

        try {
            // Appel à l'API pour ajouter une nouvelle dépense
            const response = await postData('/addDepense', newDepense);
            console.log('Dépense ajoutée:', response);

            // Réinitialiser les champs du formulaire après l'ajout
            setTitle('');
            setMontant('');
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la dépense:', error);
        }
    };

    return (
        <div className='flex items-center justify-center flex-col'>
            <img src={logo} className='w-32' alt="" />
            <h2 className='z-0.5 mt-2'>Gestion du budget</h2>
            <h1 className='text-2xl my-14 text-green-700'>Ajouter Dépense</h1>
            <div className=''>
                <form className="border-black" onSubmit={handleSubmit}>
                    <p className="text-green-700">TITRE</p>
                    <input
                        type="text"
                        id="title"
                        placeholder="Salaire"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <br /><br />
                    <p className="text-green-700">MONTANT</p>
                    <input
                        type="number"
                        id="author"
                        placeholder="Montant"
                        value={author}
                        onChange={(e) => setMontant(e.target.value)}
                        className='border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <br /><br /><br />
                    <button type="submit" className="bg-teal-700 text-white rounded h-10 w-40">
                        Ajouter Dépense
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDepense;
