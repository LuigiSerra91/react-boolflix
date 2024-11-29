
import { GlobalProvider } from './contexts/GlobalContext';

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import MoviesList from './pages/MoviesList';
function App() {




  return (
    <GlobalProvider>
      <AppHeader/>
      <MoviesList/>
      <AppFooter/>
    </GlobalProvider>
  )
}

export default App
