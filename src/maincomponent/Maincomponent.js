import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Home from "../components/Home";
import Contactme from "../components/Contactme";
import Mycv from "../components/Mycv";
import Myoffer from "../components/Myoffer";
import Portfolio from "../components/Portfolio";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProfileImg from "../image/anjani1.jpg";
import Button from "@material-ui/core/Button";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperLeft: {
    textAlign: "center",
    height: "100vh",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "rgba(145,13,13,.8)",
    borderRadius: "0px",
  },
  profileList: {
    overflowY: "auto",
  },
  paperRight: {
    textAlign: "center",
    height: "100vh",
    borderRadius: "0px",
    color: "#fff",
    backgroundColor: "rgba(30,13,13,.8)",
  },
  profile: {
    height: "10em",
    width: "10em",
    borderRadius: "50%",
    cursor: "pointer",
    marginTop: "2em",
  },
  myname: {
    fontSize: "22px",
    fontWeight: "500",
    textTransform: "uppercase",
    color: "#fff",
  },
  frontend: {
    fontSize: "16px",
    fontWeight: "300",
    textTransform: "uppercase",
  },
  profileGrpup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    marginTop: "3em",
  },
  IconGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: "2em",
  },
  touch: {
    marginTop: "3em",
  },
  home: {
    color: "#fff",
    textDecoration: "none",
  },
  socialIcon: {
    color: "#fff",
    textDecoration: "none",
  },
  myCvLink: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const Maincomponent = () => {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Grid container>
          <Grid item lg={3} md={3} sm={3} xs={12}>
            <Paper className={classes.paperLeft}>
              <div className={classes.profileList}>
                <NavLink className={classes.home} exact to="/">
                  <img
                    src={ProfileImg}
                    className={classes.profile}
                    alt="profileImage"
                  />
                </NavLink>

                <div className={classes.developer}>
                  <NavLink className={classes.home} exact to="/">
                    <h3 className={classes.myname}>Anjani Kumar</h3>
                  </NavLink>
                  <NavLink className={classes.home} exact to="/">
                    <h4 className={classes.frontend}>FRONTEND DEVELOPER</h4>
                  </NavLink>
                </div>
                <div className={classes.profileGrpup}>
                  <Button size="large" color="secondary">
                    <NavLink className={classes.home} exact to="/portfolio">
                      PORTFOLIO
                    </NavLink>
                  </Button>
                  <br />
                  <Button size="large" color="secondary">
                    <NavLink className={classes.home} to="/myoffer">
                      MY OFFER
                    </NavLink>
                  </Button>
                  <br />
                  <Button size="large" color="secondary">
                    <NavLink className={classes.home} to="/contactme">
                      CONTACT ME
                    </NavLink>
                  </Button>
                  <br />
                  <Button size="large" color="secondary">
                    <NavLink className={classes.home} to="/mycv">
                      MY CV
                    </NavLink>
                  </Button>
                </div>
                <div className={classes.touch}>
                  <h3>GET IN TOUCH</h3>
                  <div className={classes.IconGroup}>
                    <Link
                      className={classes.socialIcon}
                      href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
                      target="_blank"
                    >
                      <MailOutlineIcon fontSize="large" />
                    </Link>

                    <Link
                      className={classes.socialIcon}
                      href="https://www.linkedin.com/feed/"
                      target="_blank"
                    >
                      <LinkedInIcon fontSize="large" />
                    </Link>

                    <Link
                      className={classes.socialIcon}
                      href="https://github.com/"
                      target="_blank"
                    >
                      <GitHubIcon fontSize="large" />
                    </Link>

                    <Link
                      className={classes.socialIcon}
                      href="https://www.facebook.com/"
                      target="_blank"
                    >
                      <FacebookIcon fontSize="large" />
                    </Link>

                    <Link
                      className={classes.socialIcon}
                      href="https://twitter.com/home"
                      target="_blank"
                    >
                      <TwitterIcon fontSize="large" />
                    </Link>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={9} md={9} sm={9} xs={12}>
            <Paper className={classes.paperRight}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/portfolio" component={Portfolio} exact />
                <Route path="/mycv" component={Mycv} exact />
                <Route path="/myoffer" component={Myoffer} exact />
                <Route path="/contactme" component={Contactme} exact />
                <Redirect to="/" />
              </Switch>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
};

export default Maincomponent;
