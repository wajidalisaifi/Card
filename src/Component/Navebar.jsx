import React from 'react'
import '../Nav.css'
export default function Navebar() {
    return (
        <div className='navbar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxSeqWeNvOIJ8B6xuaGYtbeApgG2bAQieBFGkMelwnpYA3zuxJ9YE830&s=10" alt="" />
            <div className='nav'>
                <div>Home</div>
                <div>Contect</div>
                <div>About</div>
                <div>Properties</div>
            </div>
        </div>
    )
}
