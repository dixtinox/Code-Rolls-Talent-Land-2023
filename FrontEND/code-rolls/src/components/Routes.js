import { Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import User from './Pages/Usuario'
import Planes from './Pages/Planes'

function AppRoutes() {
    return <>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/planes' element={<Planes/>}></Route>
        </Routes>
    </>
}

export default AppRoutes;