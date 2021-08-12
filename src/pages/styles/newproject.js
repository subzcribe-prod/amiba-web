export default function newprojectStyles(theme) {
  return {
    paper: {
      display: "flex",
      flexDirection: "column",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
      textDecoration: "none",
    },
    apititle: {
      margin: "1em 0",
    },
  };
}
