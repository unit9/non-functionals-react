import React from 'react';
import ReactDOM from 'react-dom';

import {
  BuildVersion,
  NotFound,
  RotateDevice,
  WindowTooSmall,
  WebGLNotEnabled,
  Unsupported,
} from '../lib';

import rotateMobile from './images/rotate-mobile.png';
import rotateTablet from './images/rotate-tablet.png';
import rotateBg from './images/rotate-bg.jpg';

import windowTooSmallIcon from './images/screen-too-small.png';

import chromeIcon from './images/unsupported/chrome.png';
import edgeIcon from './images/unsupported/edge.png';
import firefoxIcon from './images/unsupported/firefox.png';
import ieIcon from './images/unsupported/ie.png';
import safariIcon from './images/unsupported/safari.png';
import warningIcon from './images/unsupported/warning.png';

const unsupportedIcons = [
  chromeIcon,
  edgeIcon,
  firefoxIcon,
  ieIcon,
  safariIcon,
];
const unsupportedIconsMobile = [
  safariIcon,
  chromeIcon,
];

const supported = {
  desktop: [
    { browser: 'chrome', minVersion: 2 },
    { browser: 'safari', minVersion: 9 },
    { browser: 'firefox', minVersion: 56 },
    { browser: 'ie', minVersion: 11 },
    { browser: 'edge', minVersion: 14 },
  ],
  tablet: [
    { os: 'ios', browser: 'mobile safari' },
    { os: 'android', browser: 'chrome' },
  ],
  mobile: [
    { os: 'ios', browser: 'mobile 1safari' },
    { os: 'android', browser: 'chrome' },
  ],
};

const version = `v 0.0.1 built on ${new Date().toGMTString()}`;

const App = () => (
  <div>
    <BuildVersion version={version} live={false} />
    <NotFound
      icon={warningIcon}
      title="OOPS!"
      subtitle="Sorry, something has gone wrong."
      description="We can't find what you're looking for."
      cta="Back to Home"
      ctaBackgroundColor="#000"
      ctaFontColor="#FFF"
      fontColor="#FFF"
      backgroundImage={rotateBg}
      backgroundColor="#000"
      zIndex={10000}
      onContinue={() => console.log('continue')}
    />
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
    <Unsupported
      supported={supported}
      icon={warningIcon}
      unsupportedIcons={unsupportedIcons}
      unsupportedIconsMobile={unsupportedIconsMobile}
      title="This experience is optimised for <br /> Chrome 00+, Firefox 00+, Safari 0+, Internet Explorer 11+, Microsoft Edge 00+"
      mobileTitle="This experience is optimised for Safari (iOS) and Chrome (Android)."
      description="We recommend that you use one of these browsers. <br />You can go to https://whatbrowser.org/ to update your browser."
      mobileDescription="We recommend that you use one of these browsers."
      socialInstructions="You can open this site directly in your browser by clicking the menu button in either the top-right or bottom-right of the screen."
      cta="Continue Anyway"
      ctaBackgroundColor="#000"
      ctaFontColor="#FFF"
      fontColor="#FFF"
      backgroundImage={rotateBg}
      backgroundColor="#000"
      zIndex={10000}
    />
    <WebGLNotEnabled
      icon={windowTooSmallIcon}
      title="Sorry!"
      description="We cannot detect WebGL in your browser. <br /> Please enable WebGL or switch to a desktop browser or device that supports WebGL to continue."
      fontColor="#FFF"
      backgroundImage={rotateBg}
      backgroundColor="#000"
      zIndex={10000}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));