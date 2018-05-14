import React from 'react';
import ReactDOM from 'react-dom';

import { NotFound, RotateDevice, WindowTooSmall, WebGLNotEnabled, Unsupported } from '../lib';

import rotateMobile from './images/rotate-mobile.png';
import rotateTablet from './images/rotate-tablet.png';
import rotateBg from './images/rotate-bg.jpg';

import windowTooSmallIcon from './images/screen-too-small.png';

const App = () => (
  <div>
    {/* <NotFound /> */}
    <RotateDevice
      mobileOrientation="portrait"
      mobileIcon={rotateMobile}
      mobileTitle="Please rotate your device vertically"
      tabletOrientation="landscape"
      tabletIcon={rotateTablet}
      tabletTitle="Please rotate your device horizontally"
      fontColor="#FFF"
      backgroundImage={rotateBg}
      backgroundColor="#000"
      zIndex={10000}
    />
    {/* <Unsupported /> */}
    {/* <WebGLNotEnabled /> */}
    <WindowTooSmall
      minWidth={1080}
      minHeight={650}
      icon={windowTooSmallIcon}
      title="Window Too Small"
      description="Please increase the size of your <br /> screen to view this website"
      fontColor="#FFF"
      backgroundImage={rotateBg}
      backgroundColor="#000"
      zIndex={10000}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));