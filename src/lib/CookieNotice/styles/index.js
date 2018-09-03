import styled from 'styled-components';

const Section = styled.div`
  
  display: ${({ active }) => active ? 'block' : 'none'};

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;

  background-color: ${({ backgroundColor }) => backgroundColor};

  color: ${({ fontColor }) => fontColor};
  text-align: center;

  z-index: ${({ zIndex }) => zIndex};

`;

const Text = styled.p`

  display: inline-block;
  vertical-align: middle;

  max-width: 80%;

  font-size: 14px;
  margin: 0 20px 0;

`;

const Close = styled.span`

  display: inline-block;
  vertical-align: middle;
  position: relative;

  width: 30px;
  height: 30px;

  border: 1px solid ${({ fontColor }) => fontColor};
  border-radius: 30px;

  cursor: pointer;

  &:before,
  &:after {
    content: '';
    
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    
    width: 1px;
    height: calc(100% - 15px);
    
    background-color: ${({ fontColor }) => fontColor};
    
    transform: translateY(-50%) rotate(-45deg);
    transform-origin: 50%;
  }

  &:after {
    transform: translateY(-50%) rotate(45deg);
  }

`;


export { Section, Text, Close };
