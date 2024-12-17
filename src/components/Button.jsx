import "./componentsStyles/Button.css"
import React from "react"
export default function Button({text,style}){
    
    return (

        <button style={style} >
            {text}
        </button>
);
}