import React from 'react';
import Footer from 'Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Header } from 'Layout/Header/Header';

export const Layout = () => {
  return (
    <>
      <Header title="Task#6 React.Redux" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
