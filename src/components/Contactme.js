import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    margin: "0",
    textAlign: "left",
    overflowY: "auto",
    height: "100%",
    background: "#2196f3",
  },
  titlegroup: {
    padding: "3em 4em",
  },
  contactGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  emailtext: {
    paddingRight: "5em",
    width: "7em",
  },
  linktext: {
    marginBottom: "1em",
    marginLeft: "1em",
  },
  socialIcon: {
    color: "#fff",
    textDecoration: "none",
    lineHeight: "1em",
  },
});

const Contactme = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titlegroup}>
        <h2 className={classes.title}> CONTACT ME</h2>
        <h4> I am available for hire and open to any ideas of cooperation.</h4>
        <div className={classes.contactGroup}>
          <h4 className={classes.emailtext}>E-mail:</h4>

          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
              target="_blank"
            >
              <MailOutlineIcon />
            </Link>
          </Box>
          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
              target="_blank"
            >
              <p className={classes.linktext}>ak.anjani2001@gmail.com</p>
            </Link>
          </Box>
        </div>
        <div className={classes.contactGroup}>
          <h4 className={classes.emailtext}>LinkedIn:</h4>

          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://www.linkedin.com/feed/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Box>
          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://www.linkedin.com/feed/"
              target="_blank"
            >
              <p className={classes.linktext}>linkedin.com</p>
            </Link>
          </Box>
        </div>

        <div className={classes.contactGroup}>
          <h4 className={classes.emailtext}>Github:</h4>

          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://github.com/"
              target="_blank"
            >
              <GitHubIcon />
            </Link>
          </Box>
          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://github.com/"
              target="_blank"
            >
              <p className={classes.linktext}>github.com</p>
            </Link>
          </Box>
        </div>

        <div className={classes.contactGroup}>
          <h4 className={classes.emailtext}>Facebook:</h4>

          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://www.facebook.com/"
              target="_blank"
            >
              <FacebookIcon />
            </Link>
          </Box>
          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://www.facebook.com/"
              target="_blank"
            >
              <p className={classes.linktext}>facebook.com</p>
            </Link>
          </Box>
        </div>

        <div className={classes.contactGroup}>
          <h4 className={classes.emailtext}>TwitterIcon:</h4>

          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://twitter.com/home"
              target="_blank"
            >
              <TwitterIcon />
            </Link>
          </Box>
          <Box component="div" display="inline">
            <Link
              className={classes.socialIcon}
              href="https://twitter.com/home"
              target="_blank"
            >
              <p className={classes.linktext}>twitter.com</p>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
