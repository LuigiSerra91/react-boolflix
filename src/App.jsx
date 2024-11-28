
import { GlobalProvider } from './contexts/GlobalContext';

import AppHeader from './components/AppHeader'

import MoviesList from './pages/MoviesList';
function App() {




  return (
    <GlobalProvider>
      <AppHeader/>
      <MoviesList/>

    </GlobalProvider>
  )
}

export default App
