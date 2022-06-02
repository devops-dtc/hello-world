import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SidebarData } from './sideBarData';
import './navbar.scss';
import { IconContext } from 'react-icons'

function Navbar({parentToChild,menuToParent}) {
    //const [sidebar, etSidebar] = useState(false);
    //const closeSidebar = () => setSidebar(false)
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <nav className={parentToChild.sidebarstatus ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">        
                    {SidebarData.map((item,index)=> {
                        return (
                            <li key={index} className={item.cName}>
                                <Link  onClick={menuToParent} to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
                

        </IconContext.Provider>
        </>
    )
}
export default Navbar;