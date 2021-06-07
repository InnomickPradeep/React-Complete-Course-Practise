import React from 'react'
import './Homepage.css'
import {Link} from 'react-router-dom'

export default function Homepage() {

    return (
        <div>
            
            <ul>

                <Link to='/home'>
                    <li>
                        <button>Home</button>
                    </li>
                </Link>

                <Link to='/contactus'>
                    <li>
                        <button>Contact Us</button>
                    </li>
                </Link>

                <Link to='/services'>
                    <li>
                        <button>Services</button>
                    </li>
                </Link>

                <Link to='/data'>
                    <li>
                        <button>Data</button>
                    </li>
                </Link>

            </ul>

        </div>
    )
}
