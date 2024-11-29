
import { GlobalProvider } from './contexts/GlobalContext';

import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppMain from './components/AppMain';
function App() {




  return (
    <GlobalProvider>
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
    </GlobalProvider>
  )
}

export default App
