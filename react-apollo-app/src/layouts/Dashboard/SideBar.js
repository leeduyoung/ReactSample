import React from "react";
import { Hidden, Drawer, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  mobileDrawer: {
    width: 256,
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: "calc(100% - 64px)",
  },
}));

const SideBar = ({ openSideBarMobile, onCloseSideBarMobile, className }) => {
  const classes = useStyles();

  const content = (
    <div className={clsx(classes.root, className)}>
      <span>SideBar Area</span>
    </div>
  );

  return (
    <>
      {/* isMobile */}
      <Hidden only={["xl", "lg", "md", "sm"]}>
        <RenderMobile
          openSideBarMobile={openSideBarMobile}
          onCloseSideBarMobile={onCloseSideBarMobile}
          content={content}
        />
      </Hidden>

      {/* isDesktop */}
      <Hidden only={"xs"}>
        <RenderDesktop content={content} />
      </Hidden>
    </>
  );
};

const RenderMobile = ({ openSideBarMobile, onCloseSideBarMobile, content }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.mobileDrawer }}
      onClose={onCloseSideBarMobile}
      open={openSideBarMobile}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

const RenderDesktop = ({ content }) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.desktopDrawer }}
      variant="persistent"
      open
    >
      {content}
    </Drawer>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
};

export default SideBar;
