import { FC, ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';
import Player from '../components/Player';
import Head from 'next/head';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'React music platform'}</title>
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
