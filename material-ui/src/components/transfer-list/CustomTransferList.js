import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Checkbox,
  Card,
  CardHeader,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const CustomTransferList = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) newChecked.push(value);
    else newChecked.splice(currentIndex, 1);

    setChecked(newChecked);
  };

  const handleToggleAll = items => {
    if (numberOfChecked(items) === items.length)
      setChecked(not(checked, items));
    else setChecked(union(checked, items));
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const numberOfChecked = items => intersection(checked, items).length;

  const customerList = (title, items) => {
    return (
      <Card>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Checkbox
              onClick={() => handleToggleAll(items)}
              checked={
                numberOfChecked(items) === items.length && items.length !== 0
              }
              disabled={items.length === 0}
            />
          }
          title={title}
          subheader={`${numberOfChecked(items)}/${items.length} 선택 됨`}
        />

        <Divider />

        <List className={classes.list} component={"div"} role={"list"}>
          {items.map(value => {
            const labelId = `transfer-list-all-item-${value}-label`;

            return (
              <ListItem
                key={value}
                role="listitem"
                button
                onClick={() => handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`List item ${value + 1}`} />
              </ListItem>
            );
          })}
        </List>
      </Card>
    );
  };

  return (
    <Grid
      container
      // justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={5}>
        {customerList("상품 목록", left)}
      </Grid>

      <Grid item xs={2}>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={5}>
        {customerList("선택된 상품 목록", right)}
      </Grid>
    </Grid>
  );
};

export default CustomTransferList;
