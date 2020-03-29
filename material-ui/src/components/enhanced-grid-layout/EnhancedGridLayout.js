import React from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  GridContainer: {
    alignItems: "center",
    fontSize: "0.9rem",
    minHeight: theme.spacing(9)
  }
}));

export const EnhancedGridContainer = ({ className, children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      className={clsx(classes.GridContainer, className)}
    >
      {children}
    </Grid>
  );
};

export const EnhancedGridLeftItem = ({ className, children, spacing }) => {
  return (
    <Grid
      item
      xs={12}
      md={spacing ? spacing : 2}
      className={clsx("gridItem", className)}
    >
      {children}
    </Grid>
  );
};

export const EnhancedGridRightItem = ({ className, children, spacing }) => {
  return (
    <Grid
      item
      xs={12}
      md={spacing ? spacing : 10}
      className={clsx("gridItem", className)}
    >
      {children}
    </Grid>
  );
};
