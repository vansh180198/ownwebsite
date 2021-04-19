import React from 'react'
import Herosection from '../components/Herosection';

import Cards from '../components/cards'
function home() {
    return (
        <div>
           
            <Herosection title="Section 1"
          
          dark={true}
          id="section1" />
            <Cards/>
        </div>
    )
}

export default home
