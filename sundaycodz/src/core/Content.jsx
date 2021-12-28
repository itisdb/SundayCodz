import React from 'react'
import Godseyeimg from '../resources/imgs/googlelens.png'
import Googletransimg from '../resources/imgs/googletrans.png'
import { Link } from 'react-router-dom'

function Content() {
    return (
        <>
            <main className="my-40 grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-x-8 gap-y-24 px-5 py-2">
                    <Link to="/godseye">
                    <div className='h-15 w-40'>
                        <img src={Godseyeimg} alt="na" />
                        <h2 className='text-center font-medium'>Godseye</h2>
                    </div>
                    </Link>
                    
                    <div className='h-15 w-40'>
                        <img src={Googletransimg} alt="na" />
                        <h2 className='text-center font-medium'>Translate app</h2>
                    </div>
                    <div className='h-15 w-40'>
                        <img src={Googletransimg} alt="na" />
                        <h2 className='text-center font-medium'>app3</h2>
                    </div>
                    <div className='h-15 w-40'>
                        <img src={Googletransimg} alt="na" />
                        <h2 className='text-center font-medium'>app4</h2>
                    </div>
            </main>   
        </>
    )
}

export default Content
