import './App.css'
import Topbar from '../src/topbar/TopBar'
import Header from './header/Header'
import Home from './pages/Home/Home'

function App() {


  return (
    <>
      <div className='App'>
        <Topbar />

        <Header />
        <Home />
        <p></p>
      </div>
    </>
  )
}

export default App
