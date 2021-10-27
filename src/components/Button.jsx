import React from 'react'


export const Button = (props) => {
    
    return (
        <>
          <button id={props.id} onClick={(e) => props.clickFunc(props.name)}>{props.name}</button>
        </>
    )
}
