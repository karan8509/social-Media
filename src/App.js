import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NewUser from './pages/NewUser'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/new-user-create' element={<NewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
