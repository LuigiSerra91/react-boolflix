import { useGlobalContext } from '../contexts/GlobalContext';
import dataFlags from '../data/dataFlags';
import AppStars from './AppStars';
import Flag from 'react-world-flags'
export default function MoviesList() {

    const { task, tvSeries } = useGlobalContext();
    return (

        <>
            <main className='bg-secondary'>
                <h3>Series</h3>
                <div className="row p-3">
                    {task.length > 0 ? (
                        task.map(post => (
                            <div className="col p-3" key={post.id}>
                                <div className="card">
                                    {
                                        post.poster_path ? (
                                            <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt={post.title || "Poster"} />
                                        ) : (
                                            <img src={`https://placehold.co/600x400?text=Hello+World+${encodeURIComponent(post.title)}`} alt="Placeholder" />
                                        )
                                    }

                                    <ul className='card-hover bg-black text-white'>
                                        <li>{post.title}</li>
                                        <li>{post.original_title}</li>
                                        <li> Languages: <Flag code={dataFlags[post.original_language]} style={{ height: 40 }} /></li>
                                        <li>{AppStars(post.vote_average)}</li>
                                        <li>{post.original_name}</li>

                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (<p><strong>No results</strong></p>
                    )}
                </div>

                <h3>Films</h3>
                <div className="row p-3">
                    {tvSeries.length > 0 ? (
                        tvSeries.map(post => (
                            <div className="col p-3" key={post.id}>
                                <div className="card">
                                    {

                                        post.poster_path ? (
                                            <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt={post.title || "Poster"} />
                                        ) : (
                                            <img src={`https://placehold.co/600x400?text=Hello+World+${encodeURIComponent(post.title)}`} style={{height:'430px'}} alt="Placeholder" />
                                        )

                                    }

                                    <ul className='card-hover bg-black text-white'>
                                        <li>{post.name}</li>
                                        <li>{post.original_name}</li>
                                        <li> Languages: <Flag code={dataFlags[post.original_language]} style={{ height: 40 }} /></li>
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