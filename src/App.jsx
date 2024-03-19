import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { NavBarComponent } from './components/NavBarComponent'
import { FooterComponent } from './components/FooterComponent'
import { Reserva } from './pages/Reserva'

function App() {

  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path='/proyecto-4/' element={<Home />} />
        <Route path='/proyecto-4/menu' element={<Menu />} />
        <Route path='/proyecto-4/reserva' element={<Reserva />} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App
