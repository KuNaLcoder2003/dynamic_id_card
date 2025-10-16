import { Route, Routes } from "react-router-dom"

import GenerateId from "./components/GenetrateId"
import Card from "./components/Card"
import Verify from "./components/Verify"
import GetIdCard from "./components/GetIdCard"



function App() {


  return (
    <Routes>
      <Route path="/" element={<GetIdCard />} />
      <Route path="/generate/:userId" element={<GenerateId />} />
      <Route path="/verify/:dynamicId" element={<Verify />} />
      <Route path="/card/:dynamicId" element={<Card />} />
    </Routes>
  )
}

export default App
