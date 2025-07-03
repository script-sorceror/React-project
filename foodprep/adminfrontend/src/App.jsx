import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Sidebar from './components/sidebar/sidebar';
import Add from './screens/Add/Add'
import List from './screens/List/List'
import Orders from './screens/Orders/Orders'
import './App.css'
import {ToastContainer} from 'react-toastify'

const url = 'http://localhost:4000'

const App = () => {

  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Add url={url}/>}/>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;