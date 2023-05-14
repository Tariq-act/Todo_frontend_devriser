import { Typography } from '@mui/material';

function Header() {
  return (
    <Typography
      variant='h5'
      sx={{
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#646682',
      }}
    >
      Todo List
    </Typography>
  );
}

export default Header;
