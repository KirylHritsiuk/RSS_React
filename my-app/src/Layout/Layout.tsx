import React from 'react';
import Footer from 'Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Header } from 'Layout/Header/Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header title="Task#4 React.Hooks" />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
