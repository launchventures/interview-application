import React from "react";
import {Link} from "react-router-dom";
import {searchIcon,questionIcon,notificationIcon,messageIcon} from "utils/Icons";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.jpeg";

const Header = ({currentUser}) => {
    const handleLogout = () => {

    }
    return (
        <div className="biHeader">
            <Link to="/">
                <img src={logo} className="logo" alt="Civit Build"/>
            </Link>
            <ul class="biHeaderNav ">
                <li className="biList">{searchIcon({width:24,height:24,fill:"#8da3b6"})}</li>
                <li className="biList">{questionIcon({width:24,height:24,fill:"#8da3b6"})}</li>
                <li className="biList">{notificationIcon({width:24,height:24,fill:"#8da3b6"})}</li>
                <li className="biList">{messageIcon({width:24,height:24,fill:"#8da3b6"})}</li>
                <li className="biUser">
                    <div className="biUserWrap">
                        <img src={user} alt="John Smith" className="biUserImg"/>
                        <div className="biUserNameWrap">
                            <div className="biUserName">Admin</div>
                            <div className="biUserRole">Super Admin</div>
                        </div>
                    </div>
                    {/* <ul className="biUserDropDown">
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/change-password">Change Password</a>
                        </li>
                        <li>
                            <a className="logout" onClick={handleLogout}>Logout</a>
                        </li>
                    </ul> */}
                </li>
            </ul>
        </div>
    )
}
export default Header;