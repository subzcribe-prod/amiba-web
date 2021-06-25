import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="http://amiba.co.in">
            amiba
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );

};

export default Copyright;
