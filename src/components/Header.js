import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Avatar, Grid, Box} from "@material-ui/core";
import avatar from "../avatar.png";
import Type from "react-typed";

//  CSS STYLES
const useStyles = makeStyles(theme =>({
    avatar: {
        width: theme.spacing(15),        
        height: theme.spacing(15),       
        margin: theme.spacing(1),
    },
    title: {
        color: "tomato",      
    },

    subtitle: {
        color: "#ffb300",
        marginBottom: "3rem",
        fontSize: 25,
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
    
}));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
        <Grid container justify="center">
            <Avatar className={classes.avatar} src = {avatar} alt = "Weihong Chen" />
        </Grid> 
            <Typography className={classes.title} variant="h4">
                <Type strings={["Weihong Chen"]} typeSpeed={30} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h4">
                <Type strings={["Web Design", "Web Development","Back End", "Application User Interface" ]} typeSpeed={30} backSpeed={50} />
            </Typography>
        </Box>
    );
};

export default Header;
