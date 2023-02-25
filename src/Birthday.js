import React from 'react'
import './index.css'

const Birthday = (props) => {
    return (
        <div className='birthday'>
            <img src= {props.img} alt="person1" />
            <div className='info'>
                <h5>{props.name}</h5>
                <p>{props.age} Years</p>
            </div>
            <img 
                src = 'https://cdn-icons-png.flaticon.com/512/189/189690.png' 
                className='btn--remove' 
                alt='remove-icon' 
                onClick={() => props.removeItem(props.id)}
            />
        </div>
    )
}

export default Birthday