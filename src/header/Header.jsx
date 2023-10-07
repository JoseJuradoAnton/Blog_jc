import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitleSm' >Jose Gonzales Developer</span>
                <span className='headerTitleLm'>Blog</span>
            </div>
            <img className='headerImg' src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    )
}

export default Header