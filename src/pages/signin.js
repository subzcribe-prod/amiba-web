import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signin } from "../redux/actions/auth";

import {
  Button,
  CssBaseline,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../components/common/TextInput";
import Copyright from "../components/copyright";
import MuiAlert from "@material-ui/lab/Alert";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../helper functions/validators";
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
    width: "100%",
    marginTop: theme.spacing(1),
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

export default function SignIn({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("sanket@email.in");
  const [username, setUsername] = useState("sanket");
  const [password, setPassword] = useState("sanket");
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
      const res = await signin(user);
      if (res.status === 200) {
        setSnack({ type: "success", msg: res.data.msg });
        // console.log(res);
        user.token = res.data.token;
        user.userId = res.data.userId;
        const saveUser = _.pick(user, ["userName", "email", "token", "userId"]);
        localStorage.setItem("user", JSON.stringify(saveUser));
        dispatch({ type: "LOGGED_IN_USER", payload: saveUser });
        history.push("/");
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextInput
                label="Email"
                value={email}
                setValue={setEmail}
                autoFocus
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
          </Grid>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link className={classes.link} to="/">
                <Typography color="primary">Forgot password?</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.link} to="/signup">
                <Typography color="primary">
                  Don't have an account? Sign Up
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
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
