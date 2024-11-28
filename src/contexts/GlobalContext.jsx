import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext()


export const GlobalProvider = ({ children }) => {
    const apiKey = 'api_key=5667e5d0910ad3a58cc0b5de1556539c'
    const apiUrl ='https://api.themoviedb.org/3/search/movie?'
    const [task, setTask] = useState([])
    const [searchQuery, setSearchQuery] = useState(''); 
    const fetchData = (query = searchQuery) => {
        fetch(`${apiUrl}${apiKey}&query=${query}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTask(data.results)
        }).catch(err => {
            console.error('errore nel caricamento dei dati', err)
        })
    }

    useEffect(() => {
        if (searchQuery) {
            fetchData();
        }
    }, [searchQuery]);
    

    return (
        <GlobalContext.Provider value= {{task, fetchData, searchQuery, setSearchQuery}}>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalContext = () => useContext(GlobalContext)