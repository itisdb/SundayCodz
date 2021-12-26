import React from 'react'
import Godseye from './Godseye'
import { Link } from 'react-router-dom'
function Content() {
    return (
        <>
            <div className='container'>
                <div className='grid'>
                    <Link to="/godseye">
                    <div className='app1'>
                        <img src="#" alt="na" />
                        <h2>Godseye</h2>
                    </div>
                    </Link>

                    <div className='app2'>
                        <img src="#" alt="na" />
                        <h2>Godseye</h2>
                    </div>
                    <div className='app3'>
                        <img src="#" alt="na" />
                        <h2>Godseye</h2>
                    </div>
                    <div className='app4'>
                        <img src="#" alt="na" />
                        <h2>Godseye</h2>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Content
