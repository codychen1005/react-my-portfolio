import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {BottomNavigation, BottomNavigationAction, Grid} from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "#17a2b8",
            "&:hover": {
                fill: "white",
                fontSize: "1.8rem"
            }
        },
        color: "white",
    },
})

const Footer = () => {
    const classes = useStyles();
    return (
        (<BottomNavigation width="auto" style={{background:"#222"}}>
            <Grid container item xs={12} spacing={4}>
            <BottomNavigationAction className={classes.root} style ={{padding:0}} onClick={(e) =>{e.preventDefault(); window.open("https://www.facebook.com/cody.chen.585")}} icon={<FacebookIcon/>}
                icon={
                    <a onClick={(e) =>{e.preventDefault(); window.open("https://www.facebook.com/cody.chen.585")}} target="_blank" rel="noreferrer">
                        <FacebookIcon/>
                    </a>
                }
            />
            </Grid>

            <Grid container item xs={12} spacing={4}>
            <BottomNavigationAction className={classes.root} style ={{padding:0}} onClick={(e) =>{e.preventDefault(); window.open("https://www.linkedin.com/in/weihongchen1005")}} icon={<LinkedInIcon/>} 
                icon={
                    <a href="https://www.linkedin.com/in/weihongchen1005" target="_blank" rel="noreferrer">
                        <LinkedInIcon/>
                    </a>
                }
                
            />
            </Grid>

            <Grid container item xs={12} spacing={4}>
            <BottomNavigationAction className={classes.root} style ={{padding:0}} onClick={(e) =>{e.preventDefault(); window.open("https://github.com/codychen1005")}} icon={<GitHubIcon />}
                icon={
                    <a href="https://github.com/codychen1005" target="_blank" rel="noreferrer">
                        <GitHubIcon/>
                    </a>
                }
            />
            </Grid>

            <Grid container item xs={12} spacing={4}>
             <BottomNavigationAction className={classes.root} style ={{padding:0}} onClick={(e) =>{e.preventDefault(); window.open("https://www.instagram.com/cody.chen.585/?hl=en")}} icon={<InstagramIcon/>}
                icon={
                    <a href="https://www.instagram.com/cody.chen.585/?hl=en" target="_blank" rel="noreferrer">
                        <InstagramIcon/>
                    </a>
                }
            />
            </Grid>
        </BottomNavigation>)
    )
}

export default Footer
