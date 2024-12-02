import { useGlobalContext } from '../contexts/GlobalContext';
import dataFlags from '../data/dataFlags';
import AppStars from './AppStars';
import Flag from 'react-world-flags'
export default function MoviesList() {

    const { task } = useGlobalContext();
    return (

        <>
            <main className='bg-secondary'>
                <div className="row p-3">
                {task.length > 0 ? (
                task.map(post => (
                    <div className="col p-3" key={post.id}>
                        <div className="card">
                            <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt="" />
                            <ul className='card-hover bg-black text-white'>
                                <li>{post.title}</li>
                                <li>{post.original_title}</li>
                                <li> Languages: <Flag code={dataFlags[post.original_language]} style={{ height: 20 }} /></li>
                                <li>{AppStars(post.vote_average)}</li>
                                <li>{post.original_name}</li>

                            </ul>
                        </div>
                    </div>
                ))
            ) : (<p><strong>No results</strong></p>
            )}
                </div>
            </main>
        </>

    );
}