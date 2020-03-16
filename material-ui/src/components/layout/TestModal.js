import React from "react"
import { Modal } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "90vw",
    height: "90vh",
    background: "white",
  },
  header: {
    width: "100%",
    height: "70px",
    background: "tomato"
  },
  body: {
    width: "100%",
    flex: 1,
    border: "4px solid gold",
  }
}))

const TestModal = ({
  open,
  onClose,
}) => {
  const classes = useStyles()

  return (
    <Modal 
      className={classes.modal}
      open={open}
      onClose={onClose}
    >
      <div className={classes.content}>
        <div className={classes.header}>
          TEST MODAL HEADER
        </div>
        <div className={classes.body}>
          TEST MODAL BODY
        </div>
      </div>
    </Modal>
  )
}

export default TestModal