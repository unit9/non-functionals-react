import React from 'react';
import ReactDOM from 'react-dom';

import { NotFound, RotateDevice, WindowTooSmall, WebGLNotEnabled, Unsupported } from '../lib';

const App = () => (
  <div>
    <NotFound />
    <RotateDevice />
    <Unsupported />
    <WebGLNotEnabled />
    <WindowTooSmall />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));