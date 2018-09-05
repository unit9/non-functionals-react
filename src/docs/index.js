import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import {
  BuildVersion,
  NotFound,
  RotateDevice,
  WindowTooSmall,
  WebGLNotEnabled,
  Unsupported,
} from './../lib';

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
import { CookieNotice } from './../lib/CookieNotice';

injectGlobal`

  html {
    font-family: sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, button, input {
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    cursor: pointer;
    outline: none;
    -webkit-appearance: none;
  }

  button, div, a, span {
    -webkit-tap-highlight-color: transparent;
  }

  .NonFunctionals:not(.CookieNotice):not(.BuildVersion) {
    color: #FFF;
    background: url(${rotateBg}) no-repeat #000;
    background-size: cover;
  }

`;

const unsupportedIcons = [
  { image: chromeIcon, label: 'Chrome 65+' },
  { image: edgeIcon, label: 'Edge 14+' },
  { image: firefoxIcon, label: 'Firefox 56+' },
  { image: ieIcon, label: 'Internet Explorer 11+' },
  { image: safariIcon, label: 'Safari 9+' },
];
const unsupportedIconsMobile = [
  { image: safariIcon, label: 'Safari (iOS)' },
  { image: chromeIcon, label: 'Chrome (Android)' },
];
const unsupportedIconsTablet = [
  { image: chromeIcon, label: 'Chrome (Android)' },
  { image: safariIcon, label: 'Safari (iOS)' },
];

const supported = {
  desktop: [
    { browser: 'chrome', minVersion: 65 },
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
    { os: 'ios', browser: 'mobile safari' },
    { os: 'android', browser: 'chrome' },
  ],
};

const App = () => (
  <div>
    <BuildVersion version={process.env.VERSION} live={false} />
    <NotFound
      icon={warningIcon}
      title="OOPS!"
      subtitle="Sorry, something has gone wrong."
      description="We can't find what you're looking for."
      cta="Back to Home"
      onContinue={() => console.log('continue')}
    />
    <WindowTooSmall
      minWidth={1080}
      minHeight={650}
      icon={windowTooSmallIcon}
      title="Window Too Small"
      description="Please increase the size of your <br /> screen to view this website."
    />
    <RotateDevice
      mobileOrientation="portrait"
      mobileIcon={rotateMobile}
      mobileTitle="Please rotate your device vertically."
      tabletOrientation="landscape"
      tabletIcon={rotateTablet}
      tabletTitle="Please rotate your device horizontally."
    />
    <WebGLNotEnabled
      icon={warningIcon}
      title="Sorry!"
      description="We cannot detect WebGL in your browser. <br /> Please enable WebGL or switch to a desktop browser or device that supports WebGL to continue."
    />
    <Unsupported
      supported={supported}
      icon={warningIcon}
      unsupportedIcons={unsupportedIcons}
      unsupportedIconsMobile={unsupportedIconsMobile}
      unsupportedIconsTablet={unsupportedIconsTablet}
      title="This experience is optimised for"
      mobileTitle="This experience is optimised for"
      tabletTitle="[TABLET] This experience is optimised for"
      description={'We recommend that you use one of these browsers. <br />You can go to <a href="https://whatbrowser.org/" target="_blank">https://whatbrowser.org/</a> to update your browser.'}
      mobileDescription="We recommend that you use one of these browsers."
      tabletDescription="[TABLET] We recommend that you use one of these browsers."
      socialInstructions="You can open this site directly in your browser by clicking the menu button in either the top-right or bottom-right of the screen."
      cta="Continue Anyway"
    />
    <CookieNotice
      text="We use cookies to provide you with a better onsite experience. By continuing to browse the site you are agreeing to our use of cookies in accordance with our <a href='https://www.unit9.com/' target=_blank>Cookie Policy</a>"
      onCloseClick={() => console.log('close clicked')}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
