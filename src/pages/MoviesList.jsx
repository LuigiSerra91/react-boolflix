
import { useGlobalContext } from '../contexts/GlobalContext';
import Flag from 'react-world-flags'
export default function MoviesList() {
    const { task } = useGlobalContext();

    

    

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