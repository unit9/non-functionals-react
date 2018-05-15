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

const Title = styled.p`
  
  font-size: 22px;
  text-align: center;
  margin: 0 0 30px 0;

`;

const UnsupportedIcons = styled.div`

  margin-bottom: 30px;

  img {
    display: inline-block;
    margin: 0 30px;
  }

`;

const Description = styled.p`

  font-size: 22px;
  text-align: center;
  margin: 0 0 30px 0;
  max-width: 600px;

`;

const Cta = styled.button`

  font-size: 22px;
  margin: 0;
  max-width: 600px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  border-radius: 5px;
  border: none;
  padding: 15px 40px;
  cursor: pointer;

`;

export { Section, Icon, Title, Description, Cta, UnsupportedIcons };
