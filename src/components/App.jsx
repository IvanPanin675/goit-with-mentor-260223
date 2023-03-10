import { Route, Routes } from 'react-router-dom';

import { Layout } from './Loyaut/Loyaut';
import { HomePage } from 'pages/HomePage';
import { AddUserPage } from 'pages/AddUserPage';



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="add" element={<AddUserPage />} />
      </Route>
    </Routes>
  );
};
