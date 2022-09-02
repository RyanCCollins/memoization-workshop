import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Main } from './screens';

export function Root() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}
