import React, { useState } from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

export default function Sidebar() {
    const[isOpen, setIsOpen] = useState(true);
    const toggleSidebar =()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`} >
            <div className='sidebar-header'>
                <button className='toggle-btn' onClick={toggleSidebar}>
                    <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>
                </button>
                <div>
                    <h2 className='logo'>{isOpen ? 'My App' : ''}</h2>
                </div>
                
            </div>
            <nav className='nav-menu '>
                <ul>
                    {SidebarData ?.map((item,index)=>(
                        <li key={index}>
                            <a href = {item.path}>
                                {item.icon}
                                { isOpen ? item.title: ''}
                            </a>

                        </li>
                    ))}
                </ul>
            </nav>
                

        </div>
    )
}
