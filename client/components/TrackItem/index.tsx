import { FC } from 'react';
import { ITrack } from '../../types/track';
import { Card, Grid, IconButton } from '@mui/material';
import { Delete, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';
import { useActions } from '../../hooks/useActions';
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';

import styles from './TrackItem.module.scss';

interface TrackItemProps {
  track: ITrack;
  activeTrack: ITrack;
}

const TrackItem: FC<TrackItemProps> = ({ track, activeTrack }) => {
  const router = useRouter();
  const { setActiveTrack, pauseTrack } = useActions();
  const isActive = activeTrack?._id === track._id;

  const play = (e) => {
    e.stopPropagation();
    if (isActive) {
      setActiveTrack(null);
      return;
    } else {
      setActiveTrack(track);
      pauseTrack();
    }
  };

  return (
    <Card className={styles.track} onClick={() => router.push(`${Routes.TRACKS}/${track._id}`)}>
      <IconButton onClick={play}>{isActive ? <CloseIcon /> : <PlayArrow />}</IconButton>
      <img
        src={'http://localhost:5000/' + track.picture}
        alt={`Обложка к треку ${track.name}`}
        width={70}
        height={70}
      />
      <Grid container direction="column" className={styles.info}>
        <h2 className={styles.name}>{track.name}</h2>
        <h3 className={styles.artist}>{track.artist}</h3>
      </Grid>
      <IconButton onClick={(e) => e.stopPropagation()} className={styles.deleteBtn}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
