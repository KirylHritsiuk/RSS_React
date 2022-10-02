import React from 'react';
import Footer from 'Layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Header } from 'Layout/Header/Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header data-testId="header" />
        <main data-testId="main">
          <Outlet data-testId="outlet" />
        </main>
        <Footer data-testId="footer" />
      </>
    );
  }
}

export default Layout;
