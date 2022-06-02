import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    /* {
        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    }, */
    {
        title: 'Profile',
        path: '/profile',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    }
]