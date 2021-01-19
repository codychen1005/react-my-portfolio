import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import GitHubIcon from '@material-ui/icons/GitHub';

import project1 from "../images/flight-reservation.gif";
import project2 from "../images/a-star-search.gif";
import project3 from "../images/pizza-manager.gif";
import project4 from "../images/tuition-manager.gif";
import project5 from "../images/bmi-calculator.gif";

const useStyles = makeStyles({
  mainContainer: {
    /*background: "#233",*/
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "6rem auto",
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        
              {/*Project 3*/}
              <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            {/* <CardActionArea> */}
            <CardMedia
            >
              <img
                src={project1}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                height="200"
                width="100%"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Flight Reservation
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Box
                  style={{
                    display: "left",
                    height: "1000",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  Implemented a relational database system using AWS to support
                  the operations of an online travel reservation website. I
                  created front-end development of user interface for customer
                  and administrator logins using HTML&CSS. Collaborated on
                  back-end using MySQL, Java and JDBC connectivity between the
                  user interface and database server.
                </Box>
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button variant="contained"
                size="small"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/codychen1005/Flight-Reservation-System"
                  );
                }}
                endIcon={<GitHubIcon />}
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
  
                {/*Project 4*/}
                <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            {/* <CardActionArea> */}
            <CardMedia

            //   component="img"
            //   alt="Project 2"
            //   height="200"
            // //   image={project2}
            >
              <img
                src={project4}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                height="200"
                width="100%"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5">
                Tuition Manager
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Box
                  style={{
                    display: "left",
                    height: "1000",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  Created a GUI Java application in OOP to form a list of
                  students and their enrollment tuition calculations based on
                  variables such as the number of credits and
                  full-time/part-time, features included adding, removing, and
                  printing of list. Using JavaFX and Scene builder to create the
                  UI
                </Box>
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button variant="contained"
                size="small"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/codychen1005/Tuition-Manager"
                  );
                }}
                endIcon={<GitHubIcon />}
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        {/*Project 1*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            {/* <CardActionArea> */}
            <CardMedia

            //   component="img"
            //   alt="Project 2"
            //   height="200"
            // //   image={project2}
            >
              <img
                src={project3}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                height="200"
                width="100%"
              />
            </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h5">
                Pizza Manager
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Grid>
                  JavaFX application to manage a customer session at an pizza
                  website. Change the size and toppings of pizza and add them to
                  a purchase. Then go to a checkout page and verify before
                  placing the order.
                </Grid>
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button variant="contained"
                size="small"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/codychen1005/Pizza-Manager");
                }}
                endIcon={<GitHubIcon />}
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>


        {/*Project 5*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            {/* <CardActionArea> */}
            <CardMedia

            //   component="img"
            //   alt="Project 2"
            //   height="200"
            // //   image={project2}
            >
              <img
                src={project5}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                height="200"
                width="100%"
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5">
                BMI Calculator
              </Typography>
              <Typography
                variant="body2"
                // align="center"
                color="textSecondary"
                component="p"
              >
                <Box
                  style={{
                    display: "left",
                    height: "1000",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  • Developed an Android Studio mobile application GUI that
                  calculates BMI when the user inputs height, weight, and age. 

                  •Using factors of age group and BMI percentile in Java, had GUI
                  output a detailed analysis and lifestyle suggestion report. 
                  
                  •Model: Google Pixel 2
                </Box>
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button variant="contained"
                size="small"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://github.com/codychen1005/BMI-Calculator"
                  );
                }}
                endIcon={<GitHubIcon />}
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/*Project 2*/}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            {/* <CardActionArea> */}
            <CardMedia

            //   component="img"
            //   alt="Project 2"
            //   height="200"
            // //   image={project2}
            >
              <img
                src={project2}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
                height="200"
                width="100%"
              />
            </CardMedia>

            <CardContent>
              <Typography gutterBottom variant="h5">
                A-Star-Search
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A* path finding algorithm written in Python which details the
                optimal path given different terrain which are easier or harder
                to traverse.
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button variant="contained"
                size="small"
                color="primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://github.com/codychen1005/A-Star-Search");
                }}
                endIcon={<GitHubIcon />}
              >
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>                
      </Grid>
    </Box>
  );
};
export default Projects;