import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BackgroundControlA.css';

function BackgroundControlA() {
  return (
    <div className='hero-container'>
      {/* <img src='/assets/sabkuch.png' id='bgimg'/> */}
      <img src='/assets/phone.png' id='mobile'/>
      <img src='/assets/store.png' id='store'/>
      <h1 id='h1'> #01</h1>
      <h1 id='h1a'> TRACE YOUR</h1>
      <h1 id='h1b'> <strong>APEX STATS </strong>ANYTIME,</h1>    
      <h1 id='h1c'> ANYWHERE!</h1>  
    </div>
  );
}

export default BackgroundControlA;