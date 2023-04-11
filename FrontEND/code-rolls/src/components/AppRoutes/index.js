import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import User from '../Pages/Usuario'
import Usuario from '../Pages/Usuario';

function AppRoutes() {
    return <>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/user' element={<User/>}></Route>
        </Routes>
    </>
}

export default AppRoutes;