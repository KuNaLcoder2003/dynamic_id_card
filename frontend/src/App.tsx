import { Route, Routes } from "react-router-dom"

import Card from "./components/Card"
import Verify from "./components/Verify"
import GetIdCard from "./components/GetIdCard"
function App() {
  return (
    <Routes>
      <Route path="/" element={<GetIdCard />} />
      <Route path="/SugeeIDCard/verify/:dynamicId" element={<Verify />} />
      <Route path="/SugeeIDCard/card/:dynamicId" element={<Card />} />
    </Routes>
  )
}

export default App
