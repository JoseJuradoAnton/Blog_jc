import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/5380610/pexels-photo-5380610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis exercitationem est officiis deserunt odit aliquid!</p>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='siderbarList'>
                    <i className="sidebarListItem">Life</i>
                    <i className="sidebarListItem">Music</i>
                    <i className="sidebarListItem">Style</i>
                    <i className="sidebarListItem">Sport</i>
                    <i className="sidebarListItem">Tech</i>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>Follows US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa fa-facebook-square"></i>
                    <i className="sidebarIcon fa fa-twitter-square"></i>
                    <i className="sidebarIcon fa fa-pinterest-square"></i>
                    <i className="sidebarIcon fa fa-isntagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar