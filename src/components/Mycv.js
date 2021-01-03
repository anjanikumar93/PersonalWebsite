import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Myresume from "../image/resume.jpg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: "0",
    textAlign: "left",
    height: "100vh",
    overflowY: "auto",
  },
  resume: {
    width: "100%",
    height: "70em",
  },
});

const Mycv = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center">
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <img className={classes.resume} src={Myresume} alt="mycv" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Mycv;
