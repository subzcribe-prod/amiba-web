import React, { useState } from "react";
import {
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../components/copyright";
import TextInput from "../components/common/TextInput";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from "../helper functions/validators";
import { signup } from "../redux/actions/auth";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import { validateSignup } from "../helper functions/validators";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    textDecoration: "none",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SignUp({ history }) {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("Sanket");
  const [lastname, setLastname] = useState("Chauhan");
  const [email, setEmail] = useState("sanket@email.com");
  const [username, setUsername] = useState("sanketchauhan");
  const [password, setPassword] = useState("sanket");
  const [snack, setSnack] = useState(null);
  // const [confirmpassword, setConfirmpassword] = useState("");
  // const [errors, setErrors] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      userName: username,
      password,
    };
    try {
      const res = await signup(data);
      if (res.status === 200) {
        setSnack({ type: "success", msg: res.data.msg });
        // console.log(res);
        history.push("/signin");
      }
    } catch (error) {
      console.log("Error", error);
      if (error.response) {
        console.log(error.response.data);
        setSnack({ type: "error", msg: error.response.data.msg });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="First Name"
                value={firstname}
                setValue={setFirstname}
                autoFocus
                validator={validateName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput
                label="Last Name"
                value={lastname}
                setValue={setLastname}
                validator={validateName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                label="Email"
                value={email}
                setValue={setEmail}
                validator={validateEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                label="Username"
                value={username}
                setValue={setUsername}
                validator={validateUsername}
              />
            </Grid>
            <Grid item xs={12}>
              <TextInput
                label="Password"
                value={password}
                setValue={setPassword}
                validator={validatePassword}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <TextInput
                label="Confirm Password"
                value={confirmpassword}
                setValue={setConfirmpassword}
              />
            </Grid> */}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the terms and conditions."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link className={classes.link} to="/signin" variant="body2">
                <Typography color="primary">
                  Already have an account? Sign in
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      {snack !== null && snack.msg !== null && snack.type !== null && (
        <Snackbar
          open={snack !== null}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={snack.type}>
            {snack.msg}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
}
