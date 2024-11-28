import { useEffect } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';
import Flag from 'react-world-flags'
export default function MoviesList() {
    const { task, fetchData, searchQuery, setSearchQuery } = useGlobalContext();

    // Effettua la chiamata AJAX (se necessaria) quando il componente viene montato
   







    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);  // Aggiorna il valore della query di ricerca
    };

    const handleSearchClick = () => {
        // Esegui la ricerca al click del bottone
        fetchData(searchQuery);  // Invoca fetchData con la query di ricerca
    };








    const flags = {
        en: 'gb',
        it: 'it',
        fr: 'fr',
        ja: 'jp',
        ru: 'ru',
        de: 'de',
        es: 'es'
    }
    return (
        <>

            <div className="container">
                <div className="back d-flex justify-content-center">
                    <div className="img-back">
                        {/* Puoi mettere uno sfondo o altre informazioni qui */}
                    </div>
                </div>

                <h1>ecco la lista dei film</h1>

                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}  // Gestisci il cambiamento del testo nella barra di ricerca
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

            {task.length > 0 ? (
                task.map(post => (
                    <div className="container p-3" key={post.id}>
                        <div className='row'>
                            <div className="col">
                                <div className="card">
                                    <ul>
                                        <li>{post.title}</li>
                                        <li>{post.original_title}</li>
                                        <li> Languages:  <Flag code={flags[post.original_language]} style={{ height: 20 }} /></li>
                                        <li>{post.vote_average}</li>
                                        <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt="" />
                                    </ul>
                                </div>
                            </div>
                        </div>



                    </div>
                ))
            ) : (
                <p>No results</p>
            )}
        </>
    );
}