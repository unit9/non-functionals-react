import styled from 'styled-components';

const Section = styled.div`

  display: ${({ active }) => active ? 'flex' : 'none'};
  flex-direction: ${({ orientation }) =>
    orientation === 'landscape'
      ? 'row'
      : 'column'};
  justify-content: center;
  align-items: center;

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
  text-align: ${({ orientation, iconExists }) =>
    orientation === 'landscape' && iconExists
      ? 'left'
      : 'center'};

  z-index: ${({ zIndex }) => zIndex};

`;

const Icon = styled.img`

  display: block;
  margin: ${({ orientation }) =>
    orientation === 'landscape'
      ? '0 30px 0 0'
      : '0 0 30px 0'};

`;

const Title = styled.h1`

  font-size: 22px;
  max-width: 40%;
  margin: 0;

`;

export { Section, Icon, Title };
