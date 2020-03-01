import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

const TopBar = ({ onOpenSideBarMobile, className }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color={"primary"}>
      <Toolbar>
        {/* isMobile */}
        <Hidden only={["xl", "lg", "md", "sm"]}>
          <RenderMobile onOpenSideBarMobile={onOpenSideBarMobile} />
        </Hidden>

        {/* isDesktop */}
        <Hidden only={"xs"}>
          <RenderDesktop />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

const RenderMobile = ({ onOpenSideBarMobile }) => {
  const classes = useStyles();

  return (
    <>
      <IconButton
        className={classes.menuButton}
        color="inherit"
        onClick={onOpenSideBarMobile}
      >
        <MenuIcon />
      </IconButton>

      <Link to="/">
        <img alt="Logo" src="/images/logos/logo--white.svg" />
      </Link>
    </>
  );
};

const RenderDesktop = () => {
  return (
    <>
      <Link to="/">
        <img alt="Logo" src="/images/logos/logo--white.svg" />
      </Link>
    </>
  );
};

export default TopBar;
