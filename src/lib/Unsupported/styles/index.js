import styled from 'styled-components';

const Section = styled.div`

  display: ${({ active }) => active ? 'block' : 'none'};

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
  text-align: center;

  z-index: ${({ zIndex }) => zIndex};

`;

const Icon = styled.img`

  display: inline-block;
  margin-bottom: 30px;

  width: ${({ type }) => type === 'mobile' ? '65px' : 'auto'};

  @media (max-height: 500px) {
    margin-bottom: 15px;
  }

`;

const Title = styled.p`

  margin: 0 0 30px 0;

  @media (max-height: 500px) {
    margin-bottom: 15px;
  }

`;

const UnsupportedIcons = styled.div`

  margin-bottom: 30px;

  img {
    display: inline-block;
    margin: 0 30px;
    max-width: 50px;
  }

  @media (max-height: 500px) {
    margin-bottom: 15px;
  }

`;

const Description = styled.p`

  margin: 0 auto 30px auto;
  max-width: 600px;

  @media (max-height: 500px) {
    margin-bottom: 15px;
  }

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
