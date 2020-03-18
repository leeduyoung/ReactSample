import React from "react"
import { SnackbarProvider } from 'notistack';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  exitButton: {
    color: "#fff"
  }
}))

const notistackRef = React.createRef();
const ToastUI = ({ children }) => {
  const classes = useStyles()

  return (
    <SnackbarProvider
      ref={notistackRef}
      action={(key) => (
        <Button 
          className={classes.exitButton}
          onClick={() => notistackRef.current.closeSnackbar(key)}
        >
          <CloseIcon />
        </Button>
      )}
      maxSnack={4}
      autoHideDuration={2500}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
    >
      {children}
    </SnackbarProvider>
  )
}

export default ToastUI