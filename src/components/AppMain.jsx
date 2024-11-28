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
}