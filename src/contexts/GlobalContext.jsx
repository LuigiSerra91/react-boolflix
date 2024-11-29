import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext()


export const GlobalProvider = ({ children }) => {
    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl ='https://api.themoviedb.org/3/search/movie?'
    const [task, setTask] = useState([])
    const [searchQuery, setSearchQuery] = useState(''); 
    const fetchData = (query = searchQuery) => {
        fetch(`${apiUrl}api_key=${apiKey}&query=${query}`)
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
    }, []);
     const seriesUrl = 'https://api.themoviedb.org/3/search/tv?'
     
    const fetchDataSeries = (query = searchQuery) => {
        fetch(`${seriesUrl}api_key=${apiKey}&query=${query}`)
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
            fetchDataSeries();
        }
    }, []);



    
const values = {
    task,
    fetchData,
    searchQuery,
    setSearchQuery,
    fetchDataSeries

}
    return (
        <GlobalContext.Provider value= {values}>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalContext = () => useContext(GlobalContext)