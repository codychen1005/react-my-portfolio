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
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/react.png";

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
                Project 1
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Grid>Project 1 description:...</Grid>
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
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
                Project 2
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Project 2 description:...
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
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
                Project 2
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
                  PS C:\Users\longc\portfolio-site git init Reinitialized
                  existing Git repository in C:/Users/longc/portfolio-site/.git/
                  PS C:\Users\longc\portfolio-site git remote add origin
                  https://github.com/codychen1005.io/porfolio-site.git fatal:
                </Box>

              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
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
                Project 2
              </Typography>
              <Typography
                variant="body2"
                align="center"
                color="textSecondary"
                component="p"
              >
                <Box
                  style={{
                    display: "left",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  PS C:\Users\longc\portfolio-site git init Reinitialized
                  existing Git repository in C:/Users/longc/portfolio-site/.git/
                  PS C:\Users\longc\portfolio-site git remote add origin
                  
                </Box>
              </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
