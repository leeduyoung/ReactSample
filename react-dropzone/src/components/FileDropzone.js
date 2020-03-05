import React from "react";
import clsx from "clsx";
import AddIcon from "@material-ui/icons/Add";
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: 150,
    height: 150,
    border: "1px solid gray",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
  },
  icon: {
    fontSize: 45,
  },
  isDrag: {
    color: "#eee",
  },
  coverImage: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 8,
  },
}));

const FileDropzone = () => {
  const classes = useStyles();
  const [image, setImage] = React.useState(null);

  const onDrop = React.useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const img = reader.result;
        setImage(img);
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className={classes.root}>
      <input {...getInputProps()} />
      <AddIcon className={clsx(classes.icon, isDragActive && classes.isDrag)} />

      {image && <img src={image} alt="" className={classes.coverImage} />}
    </div>
  );
};

export default FileDropzone;
