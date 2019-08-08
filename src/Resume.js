import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import './assets/styles/main.scss'


function Resume() {
  return (
    <div className="Resume">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default Resume;
