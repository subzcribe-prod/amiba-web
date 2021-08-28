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
import TextInput from "../components/Signup/TextInput";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateUsername,
} from "../helper functions/validators";
import { signup } from "../redux/actions/auth";
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

export default function SignUp() {
  const classes = useStyles();
  const [firstname, setFirstname] = useState("Sanket");
  const [lastname, setLastname] = useState("Chauhan");
  const [email, setEmail] = useState("sanket@email.com");
  const [username, setUsername] = useState("sanketchauhan");
  const [password, setPassword] = useState("123456789");
  // const [confirmpassword, setConfirmpassword] = useState("");
  // const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup({
        firstname,
        lastname,
        email,
        userName: username,
        password,
      });
    } catch (error) {
      console.log(error);
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
                autofocus
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
                <Typography variant="p" color="primary">
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
    </Container>
  );
}
