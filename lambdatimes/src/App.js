import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Carousel from './components/Carousel/Carousel'
import Login from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(Content)(Login);

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Carousel />
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
