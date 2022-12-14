import { useContext } from 'react';
import Router, { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { AuthContext } from '../contexts/auth-context';
import { auth, ENABLE_AUTH } from '../lib/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/actions/authentications';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const authContext = useContext(AuthContext);

  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);

  const handleSignOut = async () => {
    sessionStorage.removeItem('user');
    dispatch(logOut());
  };

  const handleCreateRoleBtn = async () => {
    router.push('/create-role')
  }

  const handleCreateDocBtn = async () => {
    router.push('/create-doc')
  }


  const handleCreateMemberBtn = async () => {
    router.push('/create-member')
  }

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '300px' }
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user?.name ?? ''}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px'
            },
            padding: '12px 16px'
          }
        }}
      >
        {/* if addmin */}
        <MenuItem onClick={handleCreateRoleBtn}>
          Create role
        </MenuItem>
        <MenuItem onClick={handleCreateMemberBtn}>
          Create member
        </MenuItem>
        <MenuItem onClick={handleCreateDocBtn}>
          Create document
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
