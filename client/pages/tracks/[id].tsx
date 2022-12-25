import MainLayout from '../../layouts/MainLayout';
import { ITrack } from '../../types/track';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';

const TrackPage = () => {
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
  const router = useRouter();

  return (
    <MainLayout>
      <Button variant="outlined" onClick={() => router.push(Routes.TRACKS)}>
        Назад
      </Button>
      <Grid container p="10px">
        <img src={track.picture} alt={`Обложка к треку ${track.name}`} width={200} height={200} />
        <Box>
          <h1>Название - {track.name}</h1>
          <h2>Исполнитель - {track.artist}</h2>
          <p>Прослушиваний - {track.listens}</p>
        </Box>
      </Grid>
      <h2>Слова в треке</h2>
      <p>{track.text}</p>
      <h2>Комментарии</h2>
      <Grid container>
        <TextField label="Ваше имя" fullWidth margin="normal" />
        <TextField label="Комментарий" multiline fullWidth rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <article>
            <p>автор - {comment.username}</p>
            <p>text - {comment.text}</p>
          </article>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
