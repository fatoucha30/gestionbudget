import { Link } from "react-router-dom"
import Header from './Header';
import logo from '../assets/Images/logo.jpg'

const Budgetpage = () => {
    return (

        <>
            <div className='flex items-center justify-center flex-col'>
            <img src={logo} className='w-32' alt="" />
            </div>
            <Header />
            <h1 className='text-yellow-400 text-2xl mx-2'>Liste des dépenses</h1><br />
            <table className="border-collapse border border-slate-500 w-full">
                <thead className='bg-green-950 text-white'>
                    <tr>
                        <th className="border border-slate-600">TITRE</th>
                        <th className="border border-slate-600">MONTANT</th>
                        <th className="border border-slate-600">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 px-7 py-3">Nourritures</td>
                        <td className="border border-slate-700 px-7 py-3">40.000 F FCA</td>
                        <td className="border border-slate-700 px-7 py-3">
                            <button className='bg-red-800 p-2 rounded-lg text-white '>Supprimer</button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 px-7 py-3">Loyer</td>
                        <td className="border border-slate-700 px-7 py-3">30.000 F FCA</td>
                        <td className="border border-slate-700 px-7 py-3">
                            <button className='bg-red-800 p-2 rounded-lg text-white '>Supprimer</button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 px-7 py-3">Transport</td>
                        <td className="border border-slate-700 px-7 py-3">10.000 F FCA</td>
                        <td className="border border-slate-700 px-7 py-3">
                            <button className='bg-red-800 p-2 rounded-lg text-white'>Supprimer</button></td>

                    </tr>
                    <tr>
                       
                            <td className='text-yellow-400'>
                            <Link to="/AddDepense">
                                <button
                                    className=" flex items-center gap-3 px-7 py-3"
                                    title="Add New">
                                    Ajouter dépense
                                    <span className='group cursor-pointer outline-none hover:rotate-90 duration-300'>
                                        <svg
                                            className="stroke-yellow-400 fill-none group-hover:fill-yellow-800 group-active:stroke-yellow-200 group-active:fill-yellow-600 group-active:duration-0 duration-300"
                                            viewBox="0 0 24 24"
                                            height="20px"
                                            width="20px"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeWidth="1.5" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            ></path>
                                            <path strokeWidth="1.5" d="M8 12H16"></path>
                                            <path strokeWidth="1.5" d="M12 16V8"></path>
                                        </svg>
                                    </span>

                                </button>
                          </Link>  
                          </td>
                        

                        <td className="border border-slate-700 "></td>



                    </tr>
                </tbody>
            </table>
            <br />
            <h1 className='text-yellow-400  text-2xl '>Liste des revenus</h1><br />
            <table className="border-collapse border border-slate-500 w-full h-40">
                <thead className='bg-green-950 text-white'>
                    <tr>
                        <th className="border border-slate-600">TITRE</th>
                        <th className="border border-slate-600">MONTANT</th>
                        <th className="border border-slate-600">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700 px-7 py-3">Salaire</td>
                        <td className="border border-slate-700 px-7 py-3">300.000F FCA</td>
                        <td className="border border-slate-700 px-7 py-3">
                            <button className='bg-red-800 p-2 rounded-lg text-white'>Supprimer</button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 px-7 py-3">Bussiness</td>
                        <td className="border border-slate-700 px-7 py-3">100.000 F FCA</td>
                        <td className="border border-slate-700 px-7 py-3">
                            <button className='bg-red-800 p-2 rounded-lg text-white'>Supprimer</button></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700 px-7 py-3">Bonus</td>
                        <td className="border border-slate-700 px-7 py-3 ">30.000 FFCA</td>
                        <td className="border border-slate-700 px-7 py-3">
                            <button className='bg-red-800 p-2 rounded-lg text-white'>Supprimer</button></td>

                    </tr>
                    <tr>
                        
                        <td className='text-yellow-400 gap-3 px-7  py-2 '>
                           <Link to='/AddRevenu'> 
                           <button
                                className=" flex items-center gap-3  py-3"
                                title="Add New">
                                Ajouter Revenus
                                <span className='group cursor-pointer outline-none hover:rotate-90 duration-300'>
                                    <svg
                                        className="stroke-yellow-400 fill-none group-hover:fill-yellow-800 group-active:stroke-yellow-200 group-active:fill-yellow-600 group-active:duration-0 duration-300"
                                        viewBox="0 0 24 24"
                                        height="20px"
                                        width="20px"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeWidth="1.5" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                        ></path>
                                        <path strokeWidth="1.5" d="M8 12H16"></path>
                                        <path strokeWidth="1.5" d="M12 16V8"></path>
                                    </svg>
                                </span>
                            </button>
                       </Link> 
                       </td>
                        
                        <td className="border border-slate-700 "></td>



                    </tr>

                </tbody>
            </table>

        </>
    );
}

export default Budgetpage;