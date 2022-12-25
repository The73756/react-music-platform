import { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { useInput } from '../../hooks/useInput';
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import TrackInfoForm from '../../components/TrackInfoForm';
import FileUpload from '../../components/FileUpload';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';

const Create = () => {
  const [step, setStep] = useState(0);
  const [picture, setPicture] = useState<File>(null);
  const [audio, setAudio] = useState<File>(null);
  const name = useInput('');
  const artist = useInput('');
  const text = useInput('');
  const router = useRouter();

  const next = () => {
    if (step !== 2) {
      setStep((prev) => prev + 1);
    } else {
      const formData = new FormData();
      formData.append('name', name.value);
      formData.append('artist', artist.value);
      formData.append('text', text.value);
      formData.append('picture', picture);
      formData.append('audio', audio);
      axios
        .post('http://localhost:5000/tracks', formData)
        .then((_) => router.push(Routes.TRACKS)) //TODO: вынести http в отдельный файл ежжи
        .catch((error) => console.log(error));
    }
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={step}>
        {step === 0 && <TrackInfoForm name={name} artist={artist} text={text} />}
        {step === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button variant="outlined" fullWidth style={{ height: '100%' }}>
              Загрузить изображение
            </Button>
          </FileUpload>
        )}
        {step === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button variant="outlined" fullWidth style={{ height: '100%' }} color="secondary">
              Загрузить аудио
            </Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={step === 0} variant="contained" onClick={back}>
          Назад
        </Button>
        <Button variant="contained" onClick={next}>
          Далее
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
