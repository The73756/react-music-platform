import { Grid, TextField } from '@mui/material';
import { FC } from 'react';
import { useInputValue } from '../../hooks/useInput';

import styles from './TrackForm.module.scss';

interface TrackFormProps {
  name: useInputValue;
  artist: useInputValue;
  text: useInputValue;
}

const TrackInfoForm: FC<TrackFormProps> = ({ name, artist, text }) => {
  return (
    <Grid container direction="column" className={styles.form}>
      <TextField className={styles.input} label="Название трека" {...name} />
      <TextField className={styles.input} label="Имя автора" {...artist} />
      <TextField className={styles.input} label="Текст к песне" multiline rows={3} {...text} />
    </Grid>
  );
};

export default TrackInfoForm;
