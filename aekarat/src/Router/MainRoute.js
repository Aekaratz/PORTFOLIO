import React from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainLayout from '../Components/Layout/MainLayout';
import PageHome from '../Components/Page/PageHome';





export default function MainRoute() {
  return (
    <BrowserRouter>
    <MainLayout>
        <Routes>
        <Route path="/" element ={<PageHome/>}/>
        <Route path='Home' element={<PageHome/>}/>
         
        </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}
