import React, { Component } from 'react';
import Todo from './Todo'

export default function List(props){
    let list = props.tasks.map((element, i) => {
        return (
            <Todo key={i} task={element} />
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}