/* eslint-disable import/extensions */

import {
  Typography,
  Box,
  Container,
  Accordion,
  AccordionDetails,
  Button,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import NoteLibrary from '../../component/NoteLibrary';

export default function Home({ data }) {
  const [input, setInput] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState(false);
  const [component, setComponent] = useState(true);

  const handleBox = () => {
    setInput(!input);
    setName(!name);
  };
  return (
    <div>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'light', marginTop: '10px' }}
          color="primary"
        >
          One simple application
        </Typography>
        <Container maxWidth="sm">
          <Box
            sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{ margin: '20px' }}
              onClick={handleBox}
            >
              {!name ? 'Abrir nova nova' : 'Fechar'}
            </Button>
          </Box>
          {component && (
            <NoteLibrary
              data={data}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              input={input}
              component={component}
              setComponent={setComponent}
            />
          )}
        </Container>
      </Box>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get('http://localhost:3000/api/posters');
  const { data } = response;

  return {
    props: { data },
  };
};
