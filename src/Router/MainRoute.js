import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainLayout from '../Components/Layout/MainLayout';
import About from '../Components/Page/About';
import HomePage from '../Components/Page/HomePage';





export default function MainRoute() {
  return (
    <BrowserRouter>
    <MainLayout>
        <Routes>
        <Route path="/" element ={<HomePage/>}/>
        <Route path='Home' element={<HomePage/>}/>
        <Route path='About' element={<About/>}/>
        </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}
