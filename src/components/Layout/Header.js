import React, {useState} from "react";
import {Link} from "react-router-dom";
import {searchIcon,questionIcon,notificationIcon,messageIcon, DownArrowIcon, ListIcon} from "utils/Icons";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user.png";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, } from "reactstrap";

const Header = ({currentUser, toggleSidebar}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
    const handleLogout = () => {

    }
    return (
        <div className="biHeader">
            <div>
                <span onClick={toggleSidebar} className="list-icon">
                    <ListIcon />
                    </span>
                <Link to="/">
                    <img src={logo} className="logo" alt="Civit Build" style={{width: '50px'}}/>
                </Link>
            </div>
            <ul class="biHeaderNav ">
                <li className="biList">{searchIcon({width:24,height:24,fill:"#256EB5"})}</li>
                <li className="biList d-none d-sm-inline">{questionIcon({width:24,height:24,fill:"#256EB5"})}</li>
                <li className="biList">{notificationIcon({width:24,height:24,fill:"#256EB5"})}</li>
                <li className="biList">{messageIcon({width:24,height:24,fill:"#256EB5"})}</li>
                <li className="biUser">
                    <div className="biUserWrap">
                        <img src={user} alt="John Smith" className="biUserImg"/>
                        <div className="biUserNameWrap ml-2">
                            <div className="biUserName">John Smith</div>
                            <div className="biUserRole">Super Admin</div>
                        </div>
                        <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="cursor-pointer">
                            <DropdownToggle data-toggle="dropdown" tag="span">
                                <span>
                                <DownArrowIcon />
                                </span>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="d-sm-none">Help</DropdownItem>
                                <DropdownItem className="d-sm-none" divider />
                                <DropdownItem>Logout</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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