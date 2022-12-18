import { FC, ReactNode } from 'react';
import Navbar from '../components/Navbar';
import { Container } from '@mui/material';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
