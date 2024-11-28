import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

export default function MoviesList() {
    const { task, fetchData } = useGlobalContext();

    // Effettua la chiamata AJAX (se necessaria) quando il componente viene montato
    useEffect(() => {
        if (task.length === 0) {
            fetchData();
        }
    }, [task, fetchData]);

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
                                        <li>{post.original_language}</li>
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