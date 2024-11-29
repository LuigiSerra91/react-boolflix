
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


    const stars = (vote) => {
        const oneToFive = Math.ceil(vote * 0.5)
        const stars = []

        for (let i = 1; i <= 5; i++) {
            if (i <= oneToFive) {
                stars.push(<i key={i} className="bi bi-star-fill text-warning me-2"></i>);
            } else {
                stars.push(<i key={i} className="bi bi-star text-warning me-2"></i>);
            }
        }

        return stars
    }



    return (
        <>
            <div className="row p-3">
                {task.length > 0 ? (
                    task.map(post => (
                        <div className=" col-3 p-3" key={post.id}>


                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500/${post.poster_path}`} alt="" />
                                <ul className='card-hover bg-black text-white'>
                                    <li>{post.title}</li>
                                    <li>{post.original_title}</li>
                                    <li> Languages: <Flag code={flags[post.original_language]} style={{ height: 20 }} /></li>
                                    <li>{stars(post.vote_average)}</li>
                                    <li>{post.original_name}</li>

                                </ul>
                            </div>





                        </div>
                    ))
                ) : (
                    <p>No results</p>
                )}
            </div>






        </>
    );
}