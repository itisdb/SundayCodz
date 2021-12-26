import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Content from '../../core/Content'
import Godseye from '../../core/Godseye'
function Routesmain() {
    return (
        <Routes>
            <Route exact path="/" element={<Content/>}/>
            <Route path="/godseye" element={<Godseye/>}/>
        </Routes>
    )
}

export default Routesmain
