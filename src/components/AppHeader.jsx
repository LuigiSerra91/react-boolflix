

import { useGlobalContext } from '../contexts/GlobalContext';
export default function AppHeader() {

    const { searchQuery, setSearchQuery, fetchData } = useGlobalContext();


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {
        // 
        fetchData(searchQuery);  // 
    };
    return (
        <>
            <header className="bg-black d-flex justify-content-between align-items-center p-2">
                <div className="back d-flex justify-content-center">
                    <div className="img-back">

                    </div>
                </div>







                <div className='d-flex gap-3'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}  //  cambiamento del testo nella barra di ricerca
                        placeholder="Search for a movie..."
                    />

                    {/* Bottone che avvia la ricerca */}
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSearchClick}  // Avvia la ricerca quando cliccato
                    >
                        Search
                    </button>
                </div>


            </header>
        </>
    )
}