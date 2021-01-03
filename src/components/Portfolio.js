import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "0",
    textAlign: "left",
    height: "100%",
    overflowY: "auto",
    background: "#2196f3",
  },
  portGroup: {
    padding: "3em 4em",
  },
  portfolio: {
    lineHeight: "1",
    color: "#fff",
  },
  work: {
    color: "#fff",
  },
  saarthi: {
    color: "#fff",
  },
  mywork: {
    color: "#fff",
  },
  myproject: {
    color: "#fff",
  },
  anotherproject: {
    color: "#fff",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.portGroup}>
        <h2 className={classes.portfolio}>PORTFOLIO</h2>
        <p className={classes.work}>
          See my works below. Unless explicitly stated otherwise, all their
          front-end parts were completely done by me.
        </p>
        <div className={classes.myproject}>
          <h3 className={classes.saarthi}>
            SAARTHI.AI, BENGALURU | JAN 2019 - PRESENT
          </h3>
          <p className={classes.mywork}>
            Presently, I’m part of the front-end team which having developed
            following project.
          </p>
          <ul>
            <li>Saarthi Website</li>
            <br />
            <li>Pitstop Chatwidget</li>
            <br />
            <li>TuneTalk Chatwidget</li>
            <br />
            <li>Live Chat & Ticketing Console</li>
            <br />
            <li>Admin & Ticketing Console</li>
            <br />
            <li>Created a cross-platform mobile app</li>
          </ul>
        </div>
        <div className={classes.anotherproject}>
          <h3>TRAILINGCRYPTO, NOIDA | AUG 2017 - DEC 2018</h3>
          <p>
            I was part of the TrailingCrypto team where I majorly worked on the
            end to end UI features development and performance improvements.
          </p>
          <ul>
            <li>Directs software design and development.</li>
            <br />
            <li>
              I completed 5+ full-stack projects based on Jquery/Javascript.
            </li>
            <br />
            <li>Tech Stack: Html, Css, Javascript, Bootstrap, Jquery</li>
          </ul>
        </div>
        <div className={classes.anotherproject}>
          <h3>TECHNOLOGIES</h3>
          <ul>
            <li>HTML5, CSS3, JavaScript, Es6</li>
            <br />
            <li>React.js, React-Native, Redux, React-Redux, React-Router</li>
            <br />
            <li>Bootstrap4, Bootstrap5</li>
            <br />
            <li>TailWind Css, Material-Ui</li>
            <br />
            <li>Git: Git flow + Code reviews</li>
            <br />
            <li>Microsoft-Office, Adobe XD</li>
            <br />
            <li>Illustrator, Figma</li>
            <br />
            <li>Storybook.js, Sql</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
