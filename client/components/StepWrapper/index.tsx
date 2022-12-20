import { FC, ReactNode } from 'react';
import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';

import styles from './StepWrapper.module.scss';

interface StepWrapperProps {
  children: ReactNode;
  activeStep: number;
}

const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите трек'];

const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="center" className={styles.cardContainer}>
        <Card className={styles.card}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
