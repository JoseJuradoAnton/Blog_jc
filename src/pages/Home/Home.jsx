import './home.css'
import Posts from '../../post/Posts'
import Sidebar from '../../sidebar/Sidebar'
const Home = () => {
    return (
        <div className='home'>
            <Posts />
            <Sidebar />
        </div>
    )
}

export default Home