import React from 'react'

import logo from '../../../../images/logo.png'
import logoName from '../../../../images/logo-name.png'

function Navbar() {
  return (
    <div className="flex">
        <div className="flex"> 
            <img src={logo} alt="logo" className="h-16" />
            <img src={logoName} alt="logo-Name" className="w-32 h-8" />
        </div>
        

        <div>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar
