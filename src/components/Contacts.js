import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";

// export default function ContactUs() {

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_prqnt4j",
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

//   return(
//     <div>
//      <Navbar />
//         <div className="container">
//         <form onSubmit={sendEmail}>
//                 <div className="row pt-5 mx-auto">
//                     <div className="col-8 form-group mx-auto">
//                         <input type="text" className="form-control" placeholder="Name" name="name"/>
//                     </div>
//                     <div className="col-8 form-group pt-2 mx-auto">
//                         <input type="email" className="form-control" placeholder="Email Address" name="email"/>
//                     </div>
//                     <div className="col-8 form-group pt-2 mx-auto">
//                         <input type="text" className="form-control" placeholder="Subject" name="subject"/>
//                     </div>
//                     <div className="col-8 form-group pt-2 mx-auto">
//                         <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                     </div>
//                     <div className="col-8 pt-3 mx-auto">
//                         <input type="submit" className="btn btn-info" value="Send Message"></input>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </div>
// )
// }

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
    <Box component="div" style={{ background: "#233", height: "100vh" }}>
      <Navbar />
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h3"
            style={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
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
          />
          <br />

          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{ style: { color: "white" } }}
            margin="dense"
            size="medium"
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
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact me
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contacts;
