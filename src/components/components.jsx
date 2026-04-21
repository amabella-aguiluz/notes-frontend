import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const AuthButton = styled(Button)({
  backgroundColor: '#38383a',
  color: '#f5f5f5',
  padding: '1rem',

  width: '100%',
  '&:hover': {
    backgroundColor: '#636367',
  },
  '&:disabled': {
    backgroundColor: '#bbb8b8',
    cursor: 'not-allowed',
  },
});

import TextField from '@mui/material/TextField';
import texture from '../assets/paper-texture.avif';

export const StyledTextField = styled(TextField)({
  

  '& .MuiOutlinedInput-root': {
     backgroundImage: `url(${texture})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
    borderRadius: '12px',
    '& fieldset': { borderColor: '#ccc' },
    '&:hover fieldset': { borderColor: '#888' },
    '&.Mui-focused fieldset': { borderColor: '#38383a' },
  },
  '& .MuiInputLabel-root': { color: '#38383a' },
});

import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

export const StyledLink = styled(Link)({
  color: '#38383a',
  textDecoration: 'none',
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'underline',
    color: '#636367',
  },
});