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

  background-color: #FFF;
  color: #000;

  z-index: 10000;

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
  background-color: #000;
  color: #FFF;
  border-radius: 5px;
  border: none;
  padding: 15px 40px;
  cursor: pointer;

`;

export const Wrapper = styled.div`

  width: calc(100% - 40px);

`;
