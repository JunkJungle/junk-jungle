import * as React from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CreateItem() {
  return (
    <FormControl>
      <TextField id="name-field" label="Name" variant="standard" />
      <FormLabel id="demo-radio-buttons-group-label">Condition</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="fair"
        name="radio-buttons-group"
      >
        <FormControlLabel value="good" control={<Radio />} label="Good" />
        <FormControlLabel value="fair" control={<Radio />} label="Fair" />
        <FormControlLabel value="poor" control={<Radio />} label="Poor" />
      </RadioGroup>
    <Button variant="contained">Submit</Button>
    </FormControl>
  );
}
