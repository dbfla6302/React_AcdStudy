import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navList from './navData'

const NavBar = () => {
    const [ isNav , setIsNav ] = useState( false )
    const onToggle  = () => {
        setIsNav( !isNav )
    }
    return (
        <div className="navbar">
            <p className="all-menu" onClick={ onToggle }>menu</p>

            <nav className={ isNav ? "on":""}>
                <ul>
                    {
                        navList.map( (item, index) =>  <li key={index}>
                            <Link to={item.path}>{item.title} </Link>
                        </li>)
                    }
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/ceo">Ceo</Link></li>
                    <li><Link to="/profile">Profile</Link></li> */}
                </ul>
                <p className="close" onClick={ () => setIsNav(false)}>X</p>
            </nav>
            
        </div>
    );
};

export default NavBar;