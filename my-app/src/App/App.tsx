import Layout from 'Layout/Layout';
import About from 'pages/About';
import FormPage from 'pages/FormPage/FormPage';
import { Home } from 'pages/Home/Home';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="form" element={<FormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
