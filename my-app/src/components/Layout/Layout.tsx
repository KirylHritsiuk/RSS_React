import React from 'react';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}

export default Layout;
