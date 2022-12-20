import React from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from './Player.module.scss';
import { ITrack } from '../../types/track';
import TrackProgress from '../TrackProgress';

const Player = () => {
  const track: ITrack = {
    _id: '1',
    artist: 'Artist 1',
    name: 'Track 1',
    text: 'Text 1',
    listens: 1,
    picture: 'http://localhost:5000/image/24c01937-90cd-4169-96bd-88d1f9566868.webp',
    audio: 'http://localhost:5000/audio/7b56e367-58d8-4d4a-ba37-2fc0fe11b5c9.ogg',
    comments: [],
  };
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>
      <Grid container direction="column" className={styles.info}>
        <h2 className={styles.name}>{track.name}</h2>
        <h3 className={styles.artist}>{track.artist}</h3>
      </Grid>
      <TrackProgress currentTime={0} duration={100} onChange={(e) => {}} />
      <VolumeUp className={styles.volumeIcon} />
      <TrackProgress currentTime={0} duration={100} onChange={(e) => {}} />
    </div>
  );
};

export default Player;
