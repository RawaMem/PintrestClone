import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

function Card({ src, alt }) {
    return (
        <div className="card">
            <img src={src} />
        </div>
    )
}

export default Card
