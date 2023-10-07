import './App.css'
import Topbar from '../src/topbar/TopBar'
import Home from './pages/Home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from '../src/topbar/TopBar'
function App() {
  return (

    <div>
      <Topbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App
