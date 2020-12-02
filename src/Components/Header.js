import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <div>
          <Link to='/' >Home1</Link>   |{' '}
            <Link to='products' >Product1</Link>   |{' '}
             
        </div>
    )
}
