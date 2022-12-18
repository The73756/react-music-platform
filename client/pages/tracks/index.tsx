import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: '1',
      artist: 'Artist 1',
      name: 'Track 1',
      text: 'Text 1',
      listens: 1,
      picture: 'http://localhost:5000/image/24c01937-90cd-4169-96bd-88d1f9566868.webp',
      audio: 'http://localhost:5000/audio/7b56e367-58d8-4d4a-ba37-2fc0fe11b5c9.ogg',
      comments: [],
    },
    {
      _id: '2',
      artist: 'Artist 2',
      name: 'Track 2',
      text: 'Text 2',
      listens: 2,
      picture: 'http://localhost:5000/image/24c01937-90cd-4169-96bd-88d1f9566868.webp',
      audio: 'b6428250-0726-447d-967d-4c26a1cfa2d8.ogg',
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card sx={{ width: '100%' }}>
          <Box p="15px">
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push(Routes.CREATE)}>Загрузить</Button>
            </Grid>
            <TrackList tracks={tracks} />
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
