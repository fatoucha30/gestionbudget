{/*import React from 'react';*/}
import './App.css'
import Budgetpage from './Components/Budgetpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddDepense from './Components/AddDepense';
import AddRevenu from './Components/AddRevenu';
import MyComponent from './Components/MyComponent';


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={< Budgetpage />} />
          <Route path='/AddDepense' element={<AddDepense />} />
          <Route path='/AddRevenu' element={<AddRevenu />} />
        </Routes>
      </BrowserRouter>

      <div className="App">
        <MyComponent />
      </div>
    </>
  )
}

export default App
