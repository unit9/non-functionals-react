import styled from 'styled-components';

const Section = styled.div`
  
  display: ${({ active }) => active ? 'flex' : 'none'};
  flex-direction: column;
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

  z-index: ${({ zIndex }) => zIndex};

`;

const Icon = styled.img`

  display: block;
  margin-bottom: 30px;

`;

const Title = styled.h1`
  
  font-size: 34px;
  text-align: center;
  margin: 0 0 10px 0;

`;

const Description = styled.p`

  font-size: 22px;
  text-align: center;
  margin: 0;
  max-width: 600px;

`;

export { Section, Icon, Title, Description };
