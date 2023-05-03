import {
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Box,
} from '@mui/material';
import { Search, Notifications, Help } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

import { styled } from '@mui/system';

const FlexBetween = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Navbar = () => {
  const router = useRouter();
  const user = {
    firstName: 'Himanshu',
    lastName: 'Chaudhary',
  };

  const neutralLight = '#F0F0F0';
  const primaryLight = '#F5E6FF';
  const alt = '#FFFFFF';

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding='1rem 6%' backgroundColor={alt}>
      {/* <FlexBetween gap='1.75rem'> */}
      <Typography
        fontWeight='bold'
        fontFamily={'inherit'}
        fontSize='clamp(1rem, 2rem, 2.25rem)'
        color='#8500FA'
        // sx={{
        //   '&:hover': {
        //     color: primaryLight,
        //     cursor: 'pointer',
        //   },
        // }}
      >
        Task Tracker
      </Typography>

      {/* <FlexBetween
          backgroundColor={neutralLight}
          borderRadius='9px'
          gap='3rem'
          padding='0.1rem 1.5rem'
        >
          <InputBase placeholder='Search...' />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween> */}
      {/* </FlexBetween> */}

      <FlexBetween gap='2rem'>
        {/* <Notifications sx={{ fontSize: '25px' }} />
        <Help sx={{ fontSize: '25px' }} /> */}
        <FormControl variant='standard' value={fullName}>
          <Select
            value={fullName}
            sx={{
              backgroundColor: neutralLight,
              width: '150px',
              borderRadius: '0.25rem',
              p: '0.25rem 1rem',
              '& .MuiSvgIcon-root': {
                pr: '0.25rem',
                width: '3rem',
              },
              '& .MuiSelect-select:focus': {
                backgroundColor: neutralLight,
              },
            }}
            input={<InputBase />}
          >
            <MenuItem value={fullName}>
              <Typography>{fullName}</Typography>
            </MenuItem>
            <MenuItem onClick={() => router.push('/login')}>Log Out</MenuItem>
          </Select>
        </FormControl>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
