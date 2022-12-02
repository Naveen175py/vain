import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BackgroundControl.css';

function BackgroundControl() {
  return (
    <div className='hero-container'>
      {/* <img src='/assets/sabkuch.png' id='bgimg'/> */}
      <img src='/assets/Frame 15.png' id='frame'/>
      <img src='/assets/box.png' id='box'/>
      <img src='/assets/phone.png' id='mobile1'/>
      <img src='/assets/store.png' id='store'/>
      <img src='/assets/arrow.png' id='arrow'/>
      <h1> VAIN - AN APEX LEGENDS</h1>
      <h1 className='heading2'> ASSISTANT & TRACKER!</h1>
      <p>Vain is a mobile app that lets you track your apex legends stats, view map rotations, leaderboards, challenges, in-game store items, browse wallpapers, news and memes and create a custom apex gaming profile!</p>
    </div>
  );
}

export default BackgroundControl;