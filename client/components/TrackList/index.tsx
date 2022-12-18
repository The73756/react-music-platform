import { FC } from 'react';
import { ITrack } from '../../types/track';
import { Box, Grid } from '@mui/material';
import TrackItem from '../TrackItem';

interface TrackListProps {
  tracks: ITrack[];
}

const TrackList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box>
        {tracks.map((track) => (
          <TrackItem key={track._id} track={track} />
        ))}
      </Box>
    </Grid>
  );
};

export default TrackList;
