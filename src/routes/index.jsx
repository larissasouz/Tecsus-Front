import { Routes, Route } from 'react-router-dom'

import Login from "../pages/Login/";
import Home from "../pages/Home"
import DashboardAgua from "../pages/Dashboard"
import UploadFile from '../pages/UploadFile';

function RoutesApp(){
    return(
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/dashboard' element={<DashboardAgua/>}/>
            <Route path='/updateDados' element={<UploadFile/>}/>
            <Route path='/' element={<Login/>}/>
        </Routes>
    )
}

export default RoutesApp;