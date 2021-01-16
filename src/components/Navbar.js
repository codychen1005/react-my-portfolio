
import {
    AppBar,
    Avatar,
    Grid,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {RemoveScrollBar} from 'react-remove-scroll-bar';
  import React, { useState } from "react";
  import { makeStyles } from "@material-ui/core/styles";
  import MobilRightMenuSlider from "@material-ui/core/Drawer";
  import { Link } from "react-router-dom";
  import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
  import MenuOpenIcon from "@material-ui/icons/MenuOpen";
  import Footer from "./Footer";
  import { AssignmentInd, Home, Apps, ContactMail } from "@material-ui/icons";
  import avatar from "../avatar.png";
  import MyResume from "../CV/Weihong_Resume.pdf";
  
  //CSS Styles
  const useStyles = makeStyles((theme) => ({
    menuSliderContainer: {
      width: 250,
      background: "tan",
      height: "100%",
    },
    avatar: {
      display: "block",
      margin: "0.5rem auto",
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  
    listItem: {
      color: "#e3f2fd",
    },
  }));
  
  const menuItems = [
    {
      listIcon: <Home />,
      listText: "Home",
      listPath: "/",
    },
    {
      listIcon: <BusinessCenterOutlinedIcon />,
      listText: "Work Experience",
      listPath: "/resume",
    },
    {
      listIcon: <AssignmentInd />,
      listText: "Resume",
      listPath: "/cover",
    },
    {
      listIcon: <Apps />,
      listText: "Projects",
      listPath: "/projects",
    },
    {
      listIcon: <ContactMail />,
      listText: "Contacts",
      listPath: "/contacts",
    },
  ];
  
  const Navbar = () => {
    const [state, setState] = useState({
      left: false,
    });
    const toggleSlider = (slider, open) => () => {
      setState({ ...state, [slider]: open });
    };
  
    const classes = useStyles();
    const sideList = (slider) => (
      <Box
        className={classes.menuSliderContainer}
        component="div"
        onClick={toggleSlider(slider, false)}
      >
        <Avatar className={classes.avatar} src={avatar} alt="Weihong Chen" />
        <Divider />
        <List>
          {menuItems.map((lsItem, key) => {
            if (key == 2) {
              return (
                <ListItem button key={key}  onClick={(e) =>{e.preventDefault(); window.open(MyResume)}}/*href={MyResume}*/ >
                  <ListItemIcon className={classes.listItem} onClick={(e) =>{e.preventDefault(); window.open(MyResume)/*location.href = MyResume*/  }} >
                    {lsItem.listIcon}
                    <a href={MyResume} target="_blank" style={{
                      textDecoration: 'none',
                      color: "#e3f2fd",
                    }} >
                    </a>
                  </ListItemIcon>
                  <Typography className={classes.listItem}>
                    <a href={MyResume} target="_blank" style={{
                      textDecoration: 'none',
                      color: "#e3f2fd",
  
                    }} >
                      {lsItem.listText}
                    </a>
                  </Typography>
  
  
                </ListItem>
              );
            } else {
              return (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                  <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcon}
                  </ListItemIcon>
                  <ListItemText
                    className={classes.listItem}
                    primary={lsItem.listText}
                  />
                </ListItem>
              );
            }
          })}
        </List>
      </Box>
    );
  
    return (
      <>
        <Box component="nav">
          <AppBar position="fixed" style={{ color: "transparent", background: "#222"}}>
            <Toolbar>
              <IconButton onClick={toggleSlider("left", true)}>
                <MenuOpenIcon style={{ color: "#17a2b8" }} />
              </IconButton>
              <Typography variant="h5" style={{ color: "tan" }}>
                {" "}
                Portfolio{" "}
              </Typography>
  
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
              >
                <Grid item>
                  <Footer />
                </Grid>
              </Grid>
              <MobilRightMenuSlider
                anchor="left"
                open={state.left}
                onClose={toggleSlider("left", false)}
              >
                {sideList("left")}
              </MobilRightMenuSlider>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
  };
  
  export default Navbar;
  