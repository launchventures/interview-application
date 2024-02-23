import React,{useState} from "react";
import {Link} from "react-router-dom";
import {leftArrowIcon,dashboardIcon,projectsIcon} from "utils/Icons";

const Sidebar = ({page,currentUser,isShowSidebar,toggleSidebar}) => {
    return (
        <div className={`biSidebarWrap ${isShowSidebar ? "hide" : ""}`}>
            <button className="arrowBtn"  onClick={toggleSidebar}>
                {leftArrowIcon({width:24,height:24,fill:"#fff"})}
            </button>
            <ul className="biSidebar">
                <li className="biList">
                    <Link to="/dashboard" className="biLink active">
                        {dashboardIcon({width:20,height:20,fill:"#8da3b6"})}
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="biList">
                    <Link to="/add-clients" className="biLink">
                        {projectsIcon({width:20,height:20,fill:"#8da3b6"})}
                        <span>All Clients</span>
                    </Link>
                </li>
                <li className="biList">
                    <Link to="/add-clients" className="biLink">
                        {dashboardIcon({width:20,height:20,fill:"#8da3b6"})}
                        <span>Register Clients</span>
                    </Link>
                </li>
                <li className="biList">
                    <Link to="/add-clients" className="biLink">
                        {dashboardIcon({width:20,height:20,fill:"#8da3b6"})}
                        <span>View Clients</span>
                    </Link>
                </li>
            </ul>
            <ul className="biSidebar">
                <li className="biList">
                    <Link to="/settings" className="biLink">
                        {dashboardIcon({width:20,height:20,fill:"#8da3b6"})}
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
export default Sidebar;