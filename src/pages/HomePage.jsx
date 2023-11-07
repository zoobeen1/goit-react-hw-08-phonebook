import React, { Suspense } from 'react';
import { Loader } from 'components/Loader';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar';
import { Container } from 'components/common/Container';

const HomePage = () => {
  return (
    <>
      <AppBar />
      {/* <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container> */}
      <h1>Phone Book</h1>
    </>
  );
};

export default HomePage;
