import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import profile from '../../images/profile.jpeg';

export default function SizeAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      
      <Avatar
        alt="Remy Sharp"
        src={profile}
        sx={{ width: '50vh', height: '50vh', boxShadow: '0 0 15px 1px #3d517f', cursor: 'pointer' }}
      />
    </Stack>
  );
}