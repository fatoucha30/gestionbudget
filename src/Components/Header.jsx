

const Header = () => {
    return (
        <>
            <header className='text-center my-2 mt-0.5'>
                <p className='z-20'>Gestion du budget</p>
            </header>
            <br />

            <div className=' text-center grid grid-cols-3 gap-5 p-8 my-4'>
                <div className="rounded shadow-md h-22">
                    <h3 className="bg-green-800 text-white text-xl">Budget</h3>
                    <p className="text-2xl text-green-800 font-bold h-20">120.000F CFA</p>
                </div>
                <div className=" rounded shadow-md h-22">
                    <h3 className="text-xl bg-green-800 text-white">Dépenses</h3>
                    <p className="text-2xl text-green-800  font-bold">100.000F CFA</p>
                </div>
                <div className=" rounded shadow-md h-22">
                    <h3 className="text-xl bg-green-800 text-white">Solde</h3>
                    <p className="text-2xl text-green-800  font-bold">20.000F CFA</p>
                </div>
            </div>

        </>
    );
};
export default Header;