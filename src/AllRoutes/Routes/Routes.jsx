import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from '../../Components/Navbar/Navbar'
import Homepage from '../../Pages/Homepage/Homepage'
import Login from '../../Pages/Login/Login'
import SignupForm from '../../Pages/Sigup/Signup'
import Profile from '../../Pages/Profile/Profile'
import User from '../../Pages/User/User'
import AboutPage from '../../Pages/Aboutpage/Abutpage'

import NoteComponent from '../../Pages/Notes/NoteCreating'
import Main from '../../Pages/Notes/Main'
import PrivateRoute from './PrivateRoute'
import NoteBox from '../../Pages/Notes/Notebox'

export default function ALLRoutes() {
    return (
        <>
        <Navbar/>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
<Route path="/" element={<Homepage/>}></Route>
<Route path="/signup" element={<SignupForm/>}/>
<Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
<Route path="/data" element={<PrivateRoute><User/></PrivateRoute>}/>
<Route path="/about" element={<AboutPage/>}/>
<Route path="/notes" element={<PrivateRoute><NoteBox/></PrivateRoute>}></Route>
            </Routes>
        </>

    )
}
