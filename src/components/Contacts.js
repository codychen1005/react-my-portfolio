import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";

// export default function ContactUs() {

function sendEmail(e) {
  e.preventDefault();
  alert("Email Sent!");
  emailjs
    .sendForm(
      "gmail",
      "template",
      e.target,
      "user_GX8OtLy7CpXrE2FI3Hexf"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    position: "absolute",
    width: "500px",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tomato",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldSet": {
        borderColor: "grey",
      },
      "&:hover fieldSet": {
        borderColor: "grey",
      },
      "&.Mui-focused fieldSet": {
        borderColor: "grey",
      },
    },
  },
})(TextField);

const Contacts = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <Navbar />
      <form
        onSubmit={sendEmail}
        style={{ background: "#233", height: "100vh"}
        }
      >
        <Grid container justify="center">
        <Box 
        style={{top: "50%", left: "50%",transform: "translate(-50%,-50%)",position: "absolute", width: "500px" }}>
          <Typography
            variant="h3"
            style={{
              color: "tomato",
              textAlign: "center",
              // textTransform: "uppercase",
            }}
          >
            Let's Talk
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
            type="text"
            className="form-control"
            name="name"
          />

          <br />

          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"

            type="email"
            className="form-control"
            name="email"
          />

          <br />
          <InputField
            multiline
            rowsMax={10}
            fullWidth={true}
            label="Leave your message here"
            variant="outlined"
            inputProps={{ style: { color: "white", height: 100 } }}
            margin="dense"
            size="medium"

            type="text"
            name="message"
            className="form-control"

          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}

            type="submit"
            value="Send Message"
          >
            Contact me
          </Button>
          </Box>
        </Grid>
      </form>
    </div>
  );
};

export default Contacts;
