import React, { useContext } from 'react'
import "./menu.css"
import { DarkModeContext } from '../context/ContextDarkMode';
import { Link } from 'react-router-dom';
const Menu = () => {
    const { isDark, setIsDark } = useContext(DarkModeContext);
    return (
    <nav className='container-menu'>
        <div className="content-menu-soons">


            <h2 className='text-menu'>J</h2>
            <ul className="list-pages-options">
            <li className='home'><Link to="/" className='menu-options home'><i class="fi fi-br-home"></i></Link></li>
            <li className='order-menu1'><Link to="/aboutme" className='menu-options'><i class="fi fi-br-user"></i></Link></li>
            <li className='order-menu2'><Link to="/project" className='menu-options'><i class="fi fi-br-briefcase"></i></Link></li>
            <li className='order-menu3'><Link to="/experience" className='menu-options'><i class="fi fi-br-document-signed"></i></Link></li>
            <button className='menu-options menu-btn-2 btn-light' onClick={()=> setIsDark(!isDark)}>
          {isDark ? <i class="fi fi-br-sun"></i> : <i class="fi fi-br-moon"></i>}

            </button>
        </ul>
        </div>
        <div className="content-user">
            <div className="avatar">
                <img src="https://i.pinimg.com/564x/d0/d4/df/d0d4df573d58584ddfe7ee7fa52191de.jpg" alt="foto" />
            </div>
            <div className="line"></div>
            <button className='menu-options btn-light' onClick={()=> setIsDark(!isDark)}>
          {isDark ? <i class="fi fi-br-sun"></i> : <i class="fi fi-br-moon"></i>}

            </button>
        </div>
    </nav>
  )
}

export default Menu
