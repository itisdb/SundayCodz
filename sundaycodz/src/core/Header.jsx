import React from 'react'
import { Link } from 'react-router-dom'
import "../resources/header.js"
import "../resources/hamburger.css"

function Header() {
    return (
        <>
            <header className='bg-blue-200 p-4 rounded text-gray-600 m-bottom-4 flex items-center align-center sm:flex-row'>
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />

                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id="menu">
                            <a href="#"><li>Home</li></a>
                            <a href="#"><li>About</li></a>
                            <a href="#"><li>Info</li></a>
                            <a href="#"><li>Contact</li></a>
                        </ul>
                    </div>
                </nav>
                <div className='sm:flex-1 sm:col-span-2 mx-auto my-auto'><Link to="/"><button><h1 className='text-5xl font-bold underline'>Logo</h1></button></Link></div>
                <div className='invisible sm:visible sm:flex-1 my-auto font-bold'>Apps</div>
                <div className='invisible sm:visible sm:flex-1 my-auto font-bold'>Tutorials</div>
                <div className='invisible sm:visible sm:flex-1 my-auto font-bold'>Github</div>
            </header>
        </>
    )
}

export default Header
