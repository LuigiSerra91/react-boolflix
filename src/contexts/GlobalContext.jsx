import { createContext, useState, useContext } from "react";

const GlobalContext = createContext()


export const GlobalProvider = ({ children }) => {
    const apiKey = import.meta.env.VITE_API_KEY
    const apiUrl = 'https://api.themoviedb.org/3/search/tv?'
     const apiUrlSeries = 'https://api.themoviedb.org/3/search/movie?'
    const [task, setTask] = useState([])
    const [tvSeries, setTvSeries] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const fetchData = () => {
        fetch(`${apiUrl}api_key=${apiKey}&query=${searchQuery}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTask(data.results)
            }).catch(err => {
                console.error('errore nel caricamento dei dati', err)
            })


    }

    const fetchDataSeries = () => {
        fetch(`${apiUrlSeries}api_key=${apiKey}&query=${searchQuery}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTvSeries(data.results)
            }).catch(err => {
                console.error('errore nel caricamento dei dati', err)
            })


    }






    const values = {
        task,
        fetchData,
        searchQuery,
        setSearchQuery,
        fetchDataSeries,
        tvSeries,
        setTvSeries



    }
    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalContext = () => useContext(GlobalContext)