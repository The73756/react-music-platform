import { FC } from 'react';
import { ITrack } from '../../types/track';
import { Box, Grid } from '@mui/material';
import TrackItem from '../TrackItem';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  const { active } = useTypedSelector((state) => state.player);

  return (
    <Grid container direction="column">
      <Box>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} activeTrack={active} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
