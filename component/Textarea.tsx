/* eslint-disable no-restricted-globals */
/* eslint-disable import/extensions */
import { Box, TextField } from '@material-ui/core';
import axios from 'axios';
import { ButtonCustomizado } from '../src/styles/ui';

export default function Textarea({
  title,
  setTitle,
  description,
  setDescription,
  component,
  setComponent,
}) {
  const handlerAdd = async () => {
    const response = await axios.post('http://localhost:3000/api/posters', {
      title,
      description,
    });

    setTitle('');
    setDescription('');
    location.reload();
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid #ddd',
        padding: '20px',
        flexDirection: 'column',
      }}
    >
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        sx={{ width: '80%' }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        placeholder="Description"
        variant="standard"
        sx={{ width: '80%' }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <ButtonCustomizado onClick={handlerAdd}>Save</ButtonCustomizado>
    </Box>
  );
}
