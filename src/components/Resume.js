import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme=>({
    mainContainer:{
        // background: "#233",
        padding: "2rem"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before":{
            content:"''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after":{
            content:"''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },

    timeLineItem:{
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content: "''",
            position: "absolute",

        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "tomato tomato transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }

        }        
    },

    timeLineYear:{
            textAlign: "center",
            maxWidth: "9.375rem",
            margin: "0 3rem 0 auto",
            fontSize: "1.8rem",
            background: "tomato",
            color: "white",
            lineHeight: 1,
            padding: "0.5rem 0 1rem",
            "&:before": {
                display: "none"
            },
            [theme.breakpoints.up("md")]:{
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)":{
                    float: "none",
                    margin:"0 auto"
                },

                "&:nth-of-type(2n):before": {
                    display: "none"
                }
            }
        },
        heading: {
            color: "tomato",
            padding: "3rem 0",
            textTransform: "uppercase"
        },
        subHeading:{
            color: "tomato",
            padding: "0",
            textTransform: "uppercase"
        }
}));


const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Box component ="header" className= {classes.mainContainer}>
            
                <Typography variant ="h4" align="center" className={classes.heading}>
                    my work experience
                </Typography>
                <Box component ="div" className={classes.timeLine}>
                    <Typography variant = "h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}> 
                        2014 
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align = "left" className={classes.subHeading}>
                            Librarian Assistant & Library Media Specialist
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"white"}}>
                            Colts Neck High School (September 2014-June 2017) 
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"tan"}}>
                            Volunteered at the library and kept resources in working fashion including maintaining media supplies and main catalog.
                        </Typography>
                    </Box>

                    <Typography variant = "h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}> 
                        2017 
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align = "left" className={classes.subHeading}>
                            Bilingual Teacher
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"white"}}>
                            Fidelity Chinese School(September 2017-June 2019)
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"tan"}}>
                            Designed weekly lesson plans to help and teach young students in learning Chinese.
                        </Typography>
                    </Box>

                    <Typography variant = "h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}> 
                        2020 
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align = "left" className={classes.subHeading}>
                            Online Tech Instructor
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"white"}}>
                            iD Tech Camps(July 2020-Current)
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"tan"}}>
                            I developed and instructed multiple computer programming related courses that accommodated students aged from 6 to 18.
                        </Typography>
                    </Box>

                    <Typography variant = "h2" 
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}> 
                        2021 
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align = "left" className={classes.subHeading}>
                            Upcoming Digital Application Engineering
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"white"}}>
                            HCL (January 2021-May 2021)
                        </Typography>
                        <Typography variant="h6" align = "left" style={{color:"tan"}}>
                        Will be appling best practices and design patterns of languages, tools, databases, and frameworks like Java, Python, Angular, React, MongoDB, and Azure Cloud to deal with customer experience and engagement with business productivity and efficiency.</Typography>
                    </Box>                                                          
                </Box>
            </Box>
        </>
    )
}

export default Resume
