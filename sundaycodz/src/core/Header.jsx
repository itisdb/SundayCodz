import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
          <div className='headerMain'>
            <Link to="/"><h1>logo</h1></Link>
                <div className='nav'>
                    <ul>
                        <a href="#"><li>Apps</li></a>
                        <a href="#"><li>Tutorials</li></a>
                        <a href="#"><li>Help</li></a>
                    </ul>
                </div>   
          </div>  
        </>
    )
}

export default Header
