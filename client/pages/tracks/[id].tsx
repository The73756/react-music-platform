import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';
import { useState } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from '../../hooks/useInput';
import { ITrack } from '../../types/track';

const TrackPage = ({ serverTrack }) => {
  const router = useRouter();
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const username = useInput('');
  const commentText = useInput('');

  const addComment = async () => {
    if (!username.value || !commentText.value) {
      alert('Введите имя пользователя и текст комментария');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        username: username.value,
        text: commentText.value,
        trackId: track._id,
      });
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
      alert('Произошла ошибка при отправке комментария!');
    }
  };

  return (
    <MainLayout title={track.name + ' - React music platform'}>
      <Button variant="outlined" onClick={() => router.push(Routes.TRACKS)}>
        Назад
      </Button>
      <Grid container p="10px">
        <img
          src={'http://localhost:5000/' + track.picture}
          alt={`Обложка к треку ${track.name}`}
          width={200}
          height={200}
        />
        <Box>
          <h1>Название - {track.name}</h1>
          <h2>Исполнитель - {track.artist}</h2>
          <p>Прослушиваний - {track.listens}</p>
        </Box>
      </Grid>
      <h2>Слова в треке</h2>
      <p>{track.text}</p>
      <h2>Комментарии</h2>
      <Grid container style={{ marginBottom: '10px' }}>
        <TextField label="Ваше имя" fullWidth margin="normal" {...username} />
        <TextField label="Комментарий" multiline fullWidth rows={4} {...commentText} />
        <Button onClick={addComment} variant="outlined">
          Отправить
        </Button>
      </Grid>
      <div>
        {track.comments.map(
          (
            comment, //TODO: вынести как компонент комментарии и форму
          ) => (
            <article key={comment._id}>
              <Box mb="10px">
                <Card style={{ padding: '10px' }}>
                  <p>автор - {comment.username}</p>
                  <p>text - {comment.text}</p>
                </Card>
              </Box>
            </article>
          ),
        )}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id);
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
