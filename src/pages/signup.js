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
import { signup } from "../axios/auth";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { handleLogin } from "../helper functions/auth";
// import { validateSignup } from "../helper functions/validators";
const _ = require("lodash");

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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snack, setSnack] = useState(null);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnack(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      email,
      userName: username,
      password,
    };
    try {
      const res = await signup(user);
      console.log(res);
      if (res.status === 200) {
        setSnack({ type: "success", msg: res.data.msg });
        user.token = res.data.token;
        user.userId = res.data.data.id;
        const saveUser = _.pick(user, ["userName", "email", "token", "userId"]);
        handleLogin(saveUser);
        history.push("/");
      }
    } catch (error) {
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
                type="password"
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
