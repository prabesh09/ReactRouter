import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './UI/Navbar'
import Account from './UI/Account'
import Cart from './UI/Cart'
import Home from './UI/Home'
import About from './UI/About'
import Order from './UI/Order'
import Member from './UI/Member'
import Blog from './UI/Blog'
import Error from './UI/Error'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/order' element={<Order />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/member' element={<Member />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </>
  )
}

export default App
