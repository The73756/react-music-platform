import { FC } from 'react';
import { ITrack } from '../../types/track';
import { Card, Grid, IconButton } from '@mui/material';
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';
import { useActions } from '../../hooks/useActions';

import styles from './TrackItem.module.scss';

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, active = false }) => {
  const router = useRouter();
  const { setActiveTrack } = useActions();

  const play = (e) => {
    e.stopPropagation();
    setActiveTrack(track);
  };

  return (
    <Card className={styles.track} onClick={() => router.push(`${Routes.TRACKS}/${track._id}`)}>
      <IconButton onClick={play}>{active ? <Pause /> : <PlayArrow />}</IconButton>
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
      {active && <div className={styles.progress}>2:13 / 3:00</div>}
      <IconButton onClick={(e) => e.stopPropagation()} className={styles.deleteBtn}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
