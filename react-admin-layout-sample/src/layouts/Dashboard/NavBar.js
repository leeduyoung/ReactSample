import React from "react";
import { makeStyles, Hidden, Drawer } from "@material-ui/core";
import clsx from "clsx";
import NavConfig from "./NavConfig";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  mobileDrawer: {
    width: 256,
  },
}))

function NavBar({
  onMobileClose,
  openMobile,
  className,
  ...rest
}) {
  const classes = useStyles();
  const location = useLocation();

  React.useEffect(() => {
    // TODO:
  }, [])

  const content = (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <nav className={classes.navigation}>
        {NavConfig.map((list) => renderNavItems({
          items: list.items,
          subheader: list.subheader,
          pathname: location.pathname,
          key: list.subheader
        }))}
      </nav>
      {/* <Divider className={classes.divider} />
      <div className={classes.profile}>
        <Badge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          classes={{
            dot: classes.badgeDot,
            badge: clsx({
              [classes.badge]: true,
              [classes.onlineBadge]: status === 'online',
              [classes.awayBadge]: status === 'away',
              [classes.busyBadge]: status === 'busy',
              [classes.offlineBadge]: status === 'offline'
            })
          }}
          variant="dot"
        >
          <Avatar
            alt="Person"
            onClick={handleStatusToggle}
            className={classes.avatar}
            src={session.user.avatar}
          />
        </Badge>
        <div className={classes.details}>
          <Link
            component={RouterLink}
            to="/profile/1/timeline"
            variant="h5"
            color="textPrimary"
            underline="none"
          >
            {`${session.user.first_name} ${session.user.last_name}`}
          </Link>
          <Typography variant="body2">{session.user.bio}</Typography>
        </div>
        <IconButton
          className={classes.moreButton}
          size="small"
        >
          <MoreIcon />
        </IconButton>
      </div> */}
    </div>
  );

  return (
    <>
      {/* MOBILE MODE */}
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{
            paper: classes.mobileDrawer
          }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>

      {/* DESKTOP MODE */}
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{
            paper: classes.desktopDrawer
          }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
}

export default NavBar;

function renderNavItems() {
  return (
    <div>renderNavItems</div>
  )
}