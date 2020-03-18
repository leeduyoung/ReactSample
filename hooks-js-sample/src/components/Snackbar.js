import React from 'react';
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';

const Snackbar = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('I love snacks.');
  };

  const handleClickVariant = variant => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <React.Fragment>
      <Button 
        color="primary"
        variant="contained"
        onClick={handleClick}
      >
        Default Message
      </Button>
      <br /><br />

      <Button 
        color="secondary"
        variant="contained"
        onClick={handleClickVariant('success')}
      >
        Success Message
      </Button>
      <br /><br />

      <Button 
        color="secondary"
        variant="contained"
        onClick={handleClickVariant('warning')}
      >
        Warning Message
      </Button>
      <br /><br />

      <Button 
        color="secondary"
        variant="contained"
        onClick={handleClickVariant('info')}
      >
        Info Message
      </Button>
    </React.Fragment>
  );
}

export default Snackbar