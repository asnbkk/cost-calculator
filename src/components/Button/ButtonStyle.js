import styled from 'styled-components';

export const ButtonStyle = styled.button`
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  border: none;
  padding: 0 20px;
  background-color: #0d923e;
  color: white;

  ${({ active }) =>
    active
      ? `
    background-color: red;
  `
      : `&:hover {
    opacity: 0.8;
  }`}
`;
