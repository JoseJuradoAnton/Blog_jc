import './App.css'
import Topbar from '../src/topbar/TopBar'
import Home from './pages/Home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from '../src/topbar/TopBar'
import SinglePost from './singlePost/SinglePost'
function App() {

  const user = false;

  return (

    <div>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>

    </div>


  )
}

export default App
