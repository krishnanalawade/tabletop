import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {//Apply this css when screen resolution is greater than 600 px
      display: "block",
    }
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {//Apply this css when screen resolution is greater than 600 px
      display: "none",
    },
  },
  linkCss:{
    color: "white !important",
    textDecoration: "none !important"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            <Link to="/" className={classes.linkCss}>
              TableTop Tech
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            <Link to="/" className={classes.linkCss}>
              TableTop
            </Link>
          </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
