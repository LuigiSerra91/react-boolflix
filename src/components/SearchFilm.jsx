import { useGlobalContext } from '../contexts/GlobalContext';

export default function SearchFilm() {
    const { searchQuery, setSearchQuery, fetchData } = useGlobalContext();


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = () => {

        if (searchQuery.trim()) {
            fetchData(searchQuery);

        }


    };

    return (

        <>

            <div className='d-flex gap-3'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}  //  cambiamento del testo nella barra di ricerca
                    placeholder="Search movie and tv series"
                />

           
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSearchClick}  // Avvia la ricerca quando cliccato
                >
                    Search
                </button>
            </div>


        </>
    )

}