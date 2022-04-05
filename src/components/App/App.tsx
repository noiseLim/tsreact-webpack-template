import React, { FC } from 'react';
import './app.scss';
import logo from '../../assets/images/logo.svg';

interface AppState {}

const App: FC<AppState> = () => {
  return (
    <div className='app'>
      <h1>React Template - {process.env.NODE_ENV}</h1>

      <img src={logo} alt='react logo' className='app__logo' />
    </div>
  );
};

export default App;
