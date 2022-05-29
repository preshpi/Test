import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'Employee',
        path: '/employee',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },

    {
        title: 'Product',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        cName: 'nav-text'
    },


    {
        title: 'Salary',
        path: '/salary',
        icon: <BiIcons.BiMoney />,
        cName: 'nav-text'
    },

    {
        title: 'Calendar',
        path: '/calendar',
        icon: <AiIcons.AiTwotoneCalendar />,
        cName: 'nav-text'
    },
]