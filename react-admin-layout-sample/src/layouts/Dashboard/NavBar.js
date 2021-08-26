import React from "react";
import { makeStyles, Hidden, Drawer, List, ListSubheader } from "@material-ui/core";
import clsx from "clsx";
import NavConfig from "./NavConfig";
import { useLocation, matchPath } from "react-router-dom";
import NavItem from "src/components/NavItem";

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

function renderNavItems({items, subheader, key, ...rest}) {
  // console.log({items, subheader, key, ...rest})
  return (
    <List key={key}>
      {subheader && <ListSubheader>{subheader}</ListSubheader>}
      {items.reduce((acc, item) => reduceChildRoutes({ acc, item, ...rest }), [])}
    </List>
  )
}

function reduceChildRoutes({acc, pathname, item, depth = 0}) {
  console.log({acc, pathname, item, depth})

  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    })

    acc.push(
      <NavItem
        key={item.href}
        depth={depth}
        icon={item.icon}
        label={item.label}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    )
  }
  else {
    acc.push(
      <NavItem
        key={item.href}
        href={item.href}
        depth={depth}
        icon={item.icon}
        label={item.label}
        title={item.title}        
      />
    )
  }

  return acc
}