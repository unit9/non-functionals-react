import styled from 'styled-components';

const Section = styled.div`
  
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
  text-align: center;

  z-index: ${({ zIndex }) => zIndex};

`;

const Icon = styled.img`

  display: inline-block;
  margin-bottom: 30px;

`;

const Title = styled.h1`
  
  font-size: 100px;
  margin: 0 0 30px 0;

  @media (max-width: 600px) {
    font-size: 60px;
  }

`;

const Subtitle = styled.h2`

  font-size: 32px;
  margin: 0 auto 10px auto;
  max-width: 600px;

  @media (max-width: 600px) {
    font-size: 22px;
  }

`;

const Description = styled.p`

  font-size: 22px;
  margin: 0 auto 30px auto;
  max-width: 600px;
  opacity: 0.5;

`;

const Cta = styled.button`

  margin: 0;
  max-width: 600px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ fontColor }) => fontColor};
  border-radius: 5px;
  border: none;
  padding: 15px 40px;
  font-size: 22px;
  cursor: pointer;

`;

export { Section, Icon, Title, Subtitle, Description, Cta };
