import React from 'react'
import Navbar from './Navbar'
import {Button} from "@material-ui/core";
import MyResume from "../CV/Weihong_Resume.pdf";

const Cover = () => {
    return (
        <>
        <Navbar />
        <a href= {MyResume} target="_blank" rel="noreferrer">
            Click me            
        </a>
        </>
    )
}

export default Cover
