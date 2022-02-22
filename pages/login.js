import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.container}>
      <Card sx={{ minWidth: 350, maxWidth: 400 }}>
        <CardContent>
          <FormControl>
            <TextField id="username-field" label="Username" variant="standard" />
            <TextField id="password-field" label="Password" variant="standard" type="password" />
          </FormControl>
        </CardContent>
        <CardActions>
          <Button size="small">Login</Button>
        </CardActions>
      </Card>
    </div>
  );
}
