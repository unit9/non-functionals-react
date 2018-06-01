import { injectGlobal } from 'styled-components';

injectGlobal`

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
  }

  button, div, a, span {
    -webkit-tap-highlight-color: transparent;
  }

`;

export { BuildVersion } from './BuildVersion';
export { NotFound } from './NotFound';
export { RotateDevice } from './RotateDevice';
export { Unsupported } from './Unsupported';
export { WebGLNotEnabled } from './WebGLNotEnabled';
export { WindowTooSmall } from './WindowTooSmall';
