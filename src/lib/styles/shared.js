import styled from 'styled-components';

export const Section = styled.div`

  display: ${({ active }) => active ? 'flex' : 'none'};
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

export const Icon = styled.img`

  display: inline-block;
  margin-bottom: 30px;

`;

export const Title = styled.h1`

  font-size: 34px;
  margin: 0 0 10px 0;

`;

export const Description = styled.p`

  font-size: 22px;
  margin: 0;

`;

export const Cta = styled.button`

  margin: 0;
  max-width: 600px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  border-radius: 5px;
  border: none;
  padding: 15px 40px;
  cursor: pointer;

`;
