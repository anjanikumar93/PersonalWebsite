import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: "0",
    textAlign: "left",
    padding: "5em 5em",
    overflowY: "auto",
  },

  anjaniText: {
    fontSize: "3em",
  },
  engineer: {
    fontSize: "1.5em",
  },
  portfolioButton: {
    marginTop: "5em 5em",
  },
  home: {
    color: "#fff",
    textDecoration: "none",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textGroup}>
        <h2 className={classes.anjaniText}>Hi, I'm Anjani Kumar</h2>
        <h3 className={classes.engineer}>
          A freelance software engineer specialized in front-end
        </h3>
        <br />
        <div className={classes.portfolioButton}>
          <NavLink className={classes.home} exact to="/portfolio">
            <Button variant="outlined" size="large" color="secondary">
              PORTFOLIO
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
