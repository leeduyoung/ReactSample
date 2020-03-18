import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  gridContainer: {
    display: "relative"
  },
  gridItem: {
    border: "1px solid",
    height: 300,
    overflowWrap: "break-word",
  },
  gridInnerDiv: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
  }
}))

const GridLayout = () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.gridContainer} wrap="wrap">
      <Grid className={classes.gridItem} spacing={3} item lg={4} md={6} xl={3} xs={12}>
        <div className={classes.gridInnerDiv}>
          한글 + 영어
          material-ui snackbar를 사용하여 토스트 메시지 샘플 만들기 (with context)material-ui snackbar를 사용하여 토스트 메시지 샘플 만들기 (with context)material-ui snackbar를 사용하여 토스트 메시지 샘플 만들기 (with context)
        </div>
      </Grid>
      <Grid className={classes.gridItem} spacing={3} item lg={4} md={6} xl={3} xs={12}>
        <div className={classes.gridInnerDiv}>
          한글만
          를사용하여토스트메시지샘플만들기를사용하여토스트메시지샘플만들기를사용하여토스트메시지샘플만들기를사용하여토스트메시지샘플만들기를사용하여토스트메시지샘플만들기를사용하여토스트메시지샘플만들기를사용하여토스트메시지샘플만들기를사용하여토스트메시지샘플만들기
        </div>
      </Grid>
      <Grid className={classes.gridItem} spacing={3} item lg={4} md={6} xl={3} xs={12}>
        영어만
        <Typography>
          {"very long text, hello loremlreos dlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdskl fjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjfllaloremlreosdlfkdsfkjsadkfasldfjasdlkfjkadsfdlskjflasdfjdsklfjadfalsdkjflasdjflla"}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default GridLayout;