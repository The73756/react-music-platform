import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchTracks, searchTracks } from '../../store/actions/track';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch() as NextThunkDispatch;
  const { tracks, error } = useTypedSelector((state) => state.track);
  const [query, setQuery] = useState('');
  const [timer, setTimer] = useState(null);

  const search = async (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value));
      }, 400),
    );
  };

  if (error) {
    return (
      <MainLayout>
        <Box m="auto">
          <h2>{error}</h2>
        </Box>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={'Список треков - React music platform'}>
      <Grid container justifyContent="center">
        <TextField
          fullWidth
          value={query}
          onChange={search}
          placeholder="Введите поисковый запрос"
        />
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const dispatch = store.dispatch as NextThunkDispatch;
  await dispatch(fetchTracks());

  return { props: {} };
});
