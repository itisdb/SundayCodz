import React from 'react'
import Godseyeimg from '../resources/imgs/googlelens.png'
import Googletransimg from '../resources/imgs/googletrans.png'
import { Link } from 'react-router-dom'
function Content() {
    return (
        <>
            <div className='contentMain'>
                <div className='grid'>
                    <Link to="/godseye">
                    <div className='app1'>
                        <img src={Godseyeimg} alt="na" />
                        <h2>Godseye</h2>
                    </div>
                    </Link>

                    
                    <div className='app2'>
                        <img src={Googletransimg} alt="na" />
                        <h2>Translate app</h2>
                    </div>
                    <div className='app3'>
                        <img src={Googletransimg} alt="na" />
                        <h2>app3</h2>
                    </div>
                    <div className='app4'>
                        <img src={Googletransimg} alt="na" />
                        <h2>app4</h2>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Content
