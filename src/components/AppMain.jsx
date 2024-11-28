import React, { useEffect } from 'react';
import { useGlobalContext } from '../contexts/GlobalContext';

export default function AppMain() {
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
          <div className="col-4 p-3" key={post.id}>
            <ul>
              <li>{post.title}</li>
              <li>{post.original_title}</li>
              <li>{post.original_language}</li>
              <li>{post.vote_average}</li>
            </ul>
          </div>
        ))
      ) : (
        <p>No results</p>
      )}
    </>
  );
}
