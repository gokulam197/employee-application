import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Blog from './Components/Blog'
import AddBlogs from './Components/AddBlogs'
import Main from './Components/Main'


function App() {
  

  return (
    <>
     {/* <Login/> */}
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Blog' element={<Main child={<Blog/>}/>}></Route>
      <Route path='/AddBlogs' element={<Main child={<AddBlogs/>}/>}></Route>
     </Routes>
    </>
  )
}

export default App
