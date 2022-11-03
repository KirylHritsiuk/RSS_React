import HomeProvider from 'HOC/HomeProvider';
import Layout from 'Layout/Layout';
import About from 'pages/About';
import CategoryPage from 'pages/CategoryPage/CategoryPage';
import Details from 'pages/Details/Details';
import FormPage from 'pages/FormPage/FormPage';
import Home from 'pages/Home/Home';
import NotFoundPage from 'pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <HomeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:id" element={<Details />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<FormPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HomeProvider>
  );
};

export default App;
