import styled from 'styled-components';

const Section = styled.div`
  
  display: ${({ active }) => active ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 20px;
  box-sizing: border-box;

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
  font-size: ${({ type }) => type === 'mobile' ? '16px' : '22px'};

  z-index: ${({ zIndex }) => zIndex};

`;

const Icon = styled.img`

  display: block;
  margin-bottom: 30px;

  width: ${({ type }) => type === 'mobile' ? '65px' : 'auto'};

`;

const Title = styled.p`
  
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

  text-align: center;
  margin: 0 0 30px 0;
  max-width: 600px;

`;

const Cta = styled.button`

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
