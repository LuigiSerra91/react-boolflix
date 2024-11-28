import { useEffect, useState } from "react";



export default function AppMain() {
const [task, seTask] = useState([])


function fetchData(url ='https://api.themoviedb.org/3/search/movie?api_key=5667e5d0910ad3a58cc0b5de1556539c&query=tarzan' ) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        seTask(data)
        
    })
}

useEffect(fetchData, [])


return (
    <>
      {task.results ? task.results.map(post => <div className="col-4 p-3" key={post.id}>

         <ul>
            <li>{post.title}</li>
            <li>{post.original_title}</li>
            <li>{post.original_language}</li>
            <li>{post.vote_average}</li>
         </ul>

</div>) : <p>no result</p>}
    
    </>
)
}