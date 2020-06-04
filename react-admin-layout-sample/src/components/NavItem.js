import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { makeStyles, ListItem, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0
  },  
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },  
  button: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%'
  },  
  buttonLeaf: {
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },  
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },  
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto'
  },  
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  }  
}))

function NavItem({
  depth,
  icon: Icon,
  label: Label,
  open: openProps,
  title,
  children,
  href,
}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(openProps)

  let paddingLeft = 8;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  const style = {
    paddingLeft
  };

  return (
    <ListItem
      key={title}
      className={clsx(classes.itemLeaf)}
    >
      <Button
        activeClassName={classes.active}
        className={clsx(classes.buttonLeaf, `depth-${depth}`)}
        component={Link}
        exact
        style={style}
        to={href}      
      >
        {Icon && <Icon className={classes.icon} />}
        {title}
        {Label && (
          <span className={classes.label}>
            <Label />
          </span>
        )}    
      </Button>
    </ListItem>
  )
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  depth: PropTypes.number.isRequired,
  href: PropTypes.string,
  icon: PropTypes.any,
  label: PropTypes.any,
  open: PropTypes.bool,
  title: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  open: false
};

export default NavItem