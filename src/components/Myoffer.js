import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "0",
    textAlign: "left",
    background: "#2196f3",
    overflowY: "auto",
    height: "100%",
  },
  offer: {
    padding: "3em 4em",
  },
  multiple: {
    lineHeight: "2em",
  },
  tooset: {
    lineHeight: "2em",
  },
});

const Myoffer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.offer}>
        <h2>MY OFFER</h2>
        <p>A front-end engineer with over 3 years of experience.</p>
        <p className={classes.multiple}>
          I have maintained, developed and launched multiple projects from
          scratch, carrying the development of its' front-end codebases.
        </p>
        <p className={classes.tooset}>
          My current toolset includes Elixir Language & Framework, React, Redux,
          ReactNative, Pre-React, Material-UI, Bootstrap4, Bootstrap4, Jquery,
          StyledComponent, and all the other various frameworks, libraries and
          technologies related to them.
        </p>

        <div>
          <h3>I can help you with all the sides of your project:</h3>
          <ul>
            <li>Verifying good UI/UX design</li>
            <br />
            <li>Leading/co-developing the front-end</li>
            <br />
            <li>Mentoring the team</li>
            <br />
            <li>Estimating tasks</li>
            <br />
            <li>Researching possible techs</li>
            <br />
            <li>Leading, launching and monitoring the project</li>
          </ul>
          <h3>Call me a Saarthi.ai in terms of software.</h3>
        </div>
      </div>
    </div>
  );
};

export default Myoffer;
