import { Grid, TextField } from '@mui/material';
import { FC } from 'react';
import styles from './TrackForm.module.scss';

const TrackInfoForm: FC = () => {
  return (
    <Grid container direction="column" className={styles.form}>
      <TextField className={styles.input} label="Название трека" />
      <TextField className={styles.input} label="Имя автора" />
      <TextField className={styles.input} label="Текст к песе" multiline rows={3} />
    </Grid>
  );
};

export default TrackInfoForm;
