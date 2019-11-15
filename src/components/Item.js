import React from 'react'
import './css/item.css'

const Item = (props) => {
    return (
            <label style={{ textDecoration: props.task.completed ? "line-through" : "none"  }} className="item">{props.task.title}</label>
    )
}

export default Item