import React, { Component } from 'react';

export default function Todo(props) {
    return (
        <div>
            <p>{props.task}</p>
        </div>
    )
}