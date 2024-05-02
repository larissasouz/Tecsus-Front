import { Routes, Route } from 'react-router-dom'

import Login from "../pages/Login/";
import Home from "../pages/Home"
import DashboardAgua from "../pages/DashboardAgua"

function RoutesApp(){
    return(
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dashboardAgua' element={<DashboardAgua/>}/>
            <Route path='/' element={<Login/>}/>
        </Routes>
    )
}

export default RoutesApp;