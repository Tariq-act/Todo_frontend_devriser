import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from '@/components/Form/Form';
import Users from '@/components/Users/Users';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  left: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  users: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function formUser() {
  const classes = useStyles();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Form />
        </div>
        <div className={`${classes.right} ${classes.users}`}>
          <Users />
        </div>
      </div>
    </div>
  );
}
