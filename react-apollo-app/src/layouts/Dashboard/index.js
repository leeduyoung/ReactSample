import React, { Suspense } from "react";
import { LinearProgress, makeStyles } from "@material-ui/core";
import { renderRoutes } from "react-router-config";
import TopBar from "./TopBar";
import SideBar from "./SideBar";

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: "100vh",
    display: "flex",
  },
  content: {
    paddingTop: 64,
    maxWidth: "100%",
    overflowX: "hidden",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 256,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: 56,
    },
  },
}));

const DashboardLayout = ({ route }) => {
  const classes = useStyles();
  const [openSideBarMobile, setOpenSideBarMobile] = React.useState(false);

  return (
    <>
      <TopBar onOpenSideBarMobile={() => setOpenSideBarMobile(true)} />
      <SideBar
        openSideBarMobile={openSideBarMobile}
        onCloseSideBarMobile={() => setOpenSideBarMobile(false)}
      />
      <div className={classes.container}>
        <div className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
