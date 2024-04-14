import { Routes, Route } from 'react-router-dom'

import Login from "../pages/Login/";
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"

function RoutesApp(){
    return(
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/' element={<Login/>}/>
        </Routes>
    )
}

export default RoutesApp;