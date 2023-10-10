import './topbar.css'
import { Link } from "react-router-dom";

const TopBar = () => {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to={"/"}>HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to={"/"}>ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to={"/"}>CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to={"/"}>WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (

                        <img
                            className="topImg"
                            src="https://images.pexels.com/photos/6195663/pexels-photo-6195663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    ) : (

                        <ul className='topList'>
                            <li className='topListItem'>

                                <Link className='link' to="/login">LOGIN</Link>
                            </li>

                            <li className='topListItem'>
                                <Link className='link' to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )

                }
                <i className='searchIcon fas fa-search'></i>
            </div>
        </div>
    )
}

export default TopBar