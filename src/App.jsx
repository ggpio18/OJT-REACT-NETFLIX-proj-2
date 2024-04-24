import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login2 from "./components/pages/login/Login2"
import Home from "./components/pages/home/Home"

function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route path="/login" element={<Login2/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/movie" element={<h2>Movie</h2>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

