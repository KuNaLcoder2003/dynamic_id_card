import { Route, Routes } from "react-router-dom"
import SignUpForm from "./components/SignupFrom"
import GenerateId from "./components/GenetrateId"
import Card from "./components/Card"



function App() {


  return (
    <Routes>
      <Route path="/" element={<SignUpForm />} />
      <Route path="/generate/:userId" element={<GenerateId />} />
      <Route path="/verify/:dynamicId" element={<div>Verify page</div>} />
      <Route path="/card/:dynamicId" element={<Card />} />
    </Routes>
  )
}

export default App
