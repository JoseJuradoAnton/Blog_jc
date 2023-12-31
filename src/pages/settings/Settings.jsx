import './settings.css'
import Sidebar from '../../sidebar/Sidebar'
const Settings = () => {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='JoseG' />

                    <label>Email</label>
                    <input type="email" placeholder='jdev23gonzales@gmail.com' />

                    <label>Password</label>
                    <input type="password" />

                    <button className="settingsSubmit">Update</button>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings