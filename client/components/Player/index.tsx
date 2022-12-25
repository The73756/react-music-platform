import React, { ChangeEvent, useEffect } from 'react';
import { Grid, IconButton } from '@mui/material';
import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import styles from './Player.module.scss';
import TrackProgress from '../TrackProgress';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

let audio;

const Player = () => {
  const { currentTime, duration, volume, pause, active } = useTypedSelector(
    (state) => state.player,
  );
  const { playTrack, pauseTrack, setVolume, setDuration, setCurrentTime } = useActions();

  useEffect(() => {
    if (!audio) {
      audio = new Audio();
    } else {
      setAudio();
      play();
    }
  }, [active]);

  const setAudio = () => {
    if (active) {
      console.log(active.audio);
      audio.src = 'http://localhost:5000/' + active.audio;
      audio.volume = volume / 100;

      audio.onloadedmetadata = () => {
        setDuration(Math.ceil(audio.duration));
      };

      audio.ontimeupdate = () => {
        setCurrentTime(Math.ceil(audio.currentTime));
      };

      audio.onended = () => {
        pauseTrack();
      };
    }
  };

  const play = () => {
    if (pause) {
      playTrack();
      audio.play();
    } else {
      pauseTrack();
      audio.pause();
    }
  };

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) / 100;
    setVolume(Number(e.target.value));
  };

  const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  };

  if (!active) {
    return null;
  }

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>{!pause ? <Pause /> : <PlayArrow />}</IconButton>
      <Grid container direction="column" className={styles.info}>
        <h2 className={styles.name}>{active?.name}</h2>
        <h3 className={styles.artist}>{active?.artist}</h3>
      </Grid>
      <TrackProgress current={currentTime} duration={duration} onChange={changeCurrentTime} />
      <VolumeUp className={styles.volumeIcon} />
      <TrackProgress current={volume} duration={100} onChange={changeVolume} isVolume />
    </div>
  );
};

export default Player;
