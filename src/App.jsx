import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './pages/UserList';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserDetail from './pages/UserDetail';

export default function App() {
  return (<React.Fragment>
    <Routes>
    <Route path='*' element={<UserList/>} />
      <Route path='/users/:userId' element={<UserDetail/>}  />
    </Routes>
  </React.Fragment>
  );
}

