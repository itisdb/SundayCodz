import React from 'react'
import WebcamCapture from '../resources/webcam/WebcamCapture'

function Godseye() {
    return (
        <div className='flex flex-col items-center'>
            <div><h1 className="mt-12 pt-2 pb-4 text-4xl decoration-blue-300 font-extrabold hover:decoration-wavy text-gray-600 underline">Gods-Eye</h1></div>
            <br></br>
            <div><WebcamCapture className="mt-12 pt-2" /></div>
        </div>
    )
}

export default Godseye
