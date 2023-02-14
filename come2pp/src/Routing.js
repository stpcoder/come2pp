import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import DefaultPage from './pages/DefaultPage'
import MainPage from './pages/MainPage'
import MapPage from './pages/MapPage'
import RankPage from './pages/RankPage'

function Routing() {
//  const [one, setOne] = useState("");
  
  return (
    <Routes>
      <Route path = "/" element = {<DefaultPage/>} />
      <Route path = "/main" element = {<MainPage/>}/>
      <Route path = "/map" element = {<MapPage/>}/>
      <Route path = "/rank" element = {<RankPage/>} />
    </Routes>
  )
}

export default Routing