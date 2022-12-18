import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { Routes } from '../../types/routes';

const Index = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card sx={{ width: '100%' }}>
          <Box p="8px">
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push(Routes.CREATE)}>Загрузить</Button>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
