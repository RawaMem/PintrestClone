import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

function Card({ src, alt }) {
    return (
        <div className="card">
            <img className='image-in-card' src={src} alt='card'/>
        </div>
    )
}

export default Card
