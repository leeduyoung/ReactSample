import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
}));

function TopBar({ onOpenNavBarMobile, className, ...rest }) {
  const classes = useStyles();

  React.useEffect(() => {
    // TODO:
  }, []);

  /**
   * Default breakpoints
   * Each breakpoint (a key) matches with a fixed screen width (a value):
   * xs, extra-small: 0px
   * sm, small: 600px
   * md, medium: 960px
   * lg, large: 1280px
   * xl, extra-large: 1920px
   */
  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
