import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext()


export const GlobalProvider = ({ children }) => {
    const [task, setTask] = useState([])
    const fetchData = (url = 'https://api.themoviedb.org/3/search/movie?api_key=5667e5d0910ad3a58cc0b5de1556539c&query=tarzan') => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTask(data.results, [])
        }).catch(err => {
            console.error('errore nel caricamento dei dati', err)
        })
    }

    useEffect(() => {
        fetchData()
    },[])
    

    return (
        <GlobalContext.Provider value= {{task, fetchData}}>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalContext = () => useContext(GlobalContext)