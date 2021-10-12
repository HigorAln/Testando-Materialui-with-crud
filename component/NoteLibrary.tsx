/* eslint-disable import/extensions */
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Textarea from './Textarea';

export default function NoteLibrary({
  data,
  title,
  setTitle,
  description,
  setDescription,
  input,
  component,
  setComponent,
}) {
  return (
    <Box>
      {input && (
        <Textarea
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          component={component}
          setComponent={setComponent}
        />
      )}
      {data.map((element) => (
        <Accordion key={element.id}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            arial-controls="panelia-content"
            id="panelia-header"
          >
            <Typography>{element.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{element.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
