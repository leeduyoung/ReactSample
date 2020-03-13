import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Post = ({ createMode, postData, onSubmit }) => {
  const classes = useStyles();
  const [post, setPost] = React.useState(
    postData || {
      title: "",
      subTitle: "",
    }
  );

  const onChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setPost(prevPost => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const onClick = () => {
    onSubmit(post);
  };

  console.log("Post: ", postData);
  return (
    <form className={classes.root} autoComplete="off">
      <TextField
        id="standard-basic"
        label="Standard"
        variant="outlined"
        comppnent={"div"}
        name="title"
        value={post.title}
        onChange={onChange}
      />
      <TextField
        id="filled-basic"
        label="Filled"
        variant="outlined"
        name="subTitle"
        comppnent={"div"}
        value={post.subTitle}
        onChange={onChange}
      />
      <Button onClick={onClick}>전송</Button>
    </form>
  );
};

export default Post;
