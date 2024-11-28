import { useState } from 'react'
import AppMain from './components/AppMain';
import { GlobalProvider } from './contexts/GlobalContext';

const api_url = 'https://api.themoviedb.org/3/search/movie?api_key=5667e5d0910ad3a58cc0b5de1556539c'
function App() {
  const url ='https://api.themoviedb.org/3/search/movie?api_key=5667e5d0910ad3a58cc0b5de1556539c&query=tarzan' ;



  return (
    <GlobalProvider>
      <AppMain/>
    </GlobalProvider>
  )
}

export default App
