
import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { NavBarComponent } from './components/NavBarComponent'

function App() {

  return (
    <>
    <NavBarComponent />
      <Routes>
        <Route path='/proyecto-4/' element={<Home />} />
        <Route path='/proyecto-4/menu' element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
