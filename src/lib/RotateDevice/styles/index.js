import styled from 'styled-components';

const Section = styled.div`

  display: ${({ active }) => active ? 'flex' : 'none'};
  flex-direction: ${({ orientation }) =>
    orientation === 'landscape'
      ? 'row'
      : 'column'};
  justify-content: space-around;
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

  z-index: ${({ zIndex }) => zIndex};

`;

const Icon = styled.img`

  display: block;

`;

const Title = styled.h1`

  font-size: 22px;
  text-align: left;
  max-width: 40%;

`;

export { Section, Icon, Title };
