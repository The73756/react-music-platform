import { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid } from '@mui/material';
import TrackInfoForm from '../../components/TrackInfoForm';
import FileUpload from '../../components/FileUpload';

const Create = () => {
  const [step, setStep] = useState(0);
  const [picture, setPicture] = useState<File>(null);
  const [audio, setAudio] = useState<File>(null);

  console.log(audio, picture);

  const next = () => {
    if (step !== 2) {
      setStep((prev) => prev + 1);
    }
  };

  const back = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={step}>
        {step === 0 && <TrackInfoForm />}
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
