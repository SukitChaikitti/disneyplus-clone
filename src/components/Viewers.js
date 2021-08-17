import React from 'react';
import './Viewers.css';

function Viewers() {
    return (
        <div className = 'viewer'>
            <div className = 'viewer__container'>
                <img src = '/images/viewers-disney.png'/>
            </div>
            <div className = 'viewer__container'>
                <img src = '/images/viewers-marvel.png'/>
            </div>
            <div className = 'viewer__container'>
                <img src = '/images/viewers-national.png'/>
            </div>
            <div className = 'viewer__container'>
                <img src = '/images/viewers-pixar.png'/>
            </div>
            <div className = 'viewer__container'>
                <img src = '/images/viewers-starwars.png'/>
            </div>

        </div>
    )
}

export default Viewers
