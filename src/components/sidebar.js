import React,{useState} from 'react';
import './sidebar.css';
import Sidebar2 from './sidebar2.0'

function Sidebar() {
    const [open, setOpen] = useState(false)
    return (
        <div className="sidebar">
            <ul className="inner">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item" onMouseEnter={()=>{setOpen(!open)}} onMouseLeave={()=>{setOpen(!open)}}>Item 3
                {/* {open && <Sidebar2 className="sd" /> } */}
                </li>
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item" onMouseEnter={()=>{setOpen(!open)}} onMouseLeave={()=>{setOpen(!open)}}>Item 3
                {/* {open && <Sidebar2 className="sd" /> } */}
                </li>
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item" onMouseEnter={()=>{setOpen(!open)}} onMouseLeave={()=>{setOpen(!open)}}>Item 3
                {/* {open && <Sidebar2 className="sd" /> } */}
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
