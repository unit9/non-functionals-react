import styled from 'styled-components';

const Host = styled.div`

  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  color: white;
  font-family: sans-serif;
  font-size: 11px;
  padding: 5px 10px;
  position: fixed;
  transition: right 0.5s;
  z-index: 50001;

`;

const Button = styled.button`

  cursor: pointer;
  display: inline-block;
  color: white;

`;

const Info = styled.div`

  display: inline-block;
  margin: 0 10px 0 0;

`;

export { Host, Button, Info };
