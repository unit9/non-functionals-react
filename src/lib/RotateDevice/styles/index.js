import styled from 'styled-components';

import BaseWrapper from '../../styles/Wrapper';

const Section = styled.div`

  display: ${({ active }) => active ? 'block' : 'none'};

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
  background-size: cover;

  color: ${({ fontColor }) => fontColor};

  z-index: ${({ zIndex }) => zIndex};

`;

const Wrapper = BaseWrapper.extend`

  text-align: center;
  width: 75%;

`;

const Icon = styled.img`

  display: inline-block;
  vertical-align: middle;

  margin: ${({ orientation }) => orientation === 'landscape' ? '0 30px 0 0' : '0 0 30px 0'};

`;

const Title = styled.h1`

  display: ${({ orientation }) => orientation === 'landscape' ? 'inline-block' : 'block'};
  vertical-align: middle;

  text-align: ${({ orientation, iconExists }) =>
    orientation === 'landscape' && iconExists
      ? 'left'
      : 'center'};

  font-size: 22px;

  max-width:  ${({ orientation }) => orientation === 'landscape' ? '40%' : '75%'};
  margin: 0 auto;

`;

export { Section, Wrapper, Icon, Title };
