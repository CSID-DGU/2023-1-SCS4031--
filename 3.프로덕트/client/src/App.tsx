import React, { useState } from 'react'
import RoadMap from "./components/RoadMap";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages";

function App() {

  return (
      <Routes>
          <Route path={"/"} element={<MainPage />} />
      </Routes>
  )
}

export default App
