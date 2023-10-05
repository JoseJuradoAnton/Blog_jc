import './App.css'
import Topbar from '../src/topbar/TopBar'
import Home from './pages/Home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'

function App() {


  return (
    <>
      <div className='App'>
        <Topbar />
        <Home />
      </div>
    </>
  )
}

export default App
