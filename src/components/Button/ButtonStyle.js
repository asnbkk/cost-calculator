import styled from 'styled-components';

export const ButtonStyle = styled.button`
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  border: none;
  padding: 0 2rem;
  background-color: #f0f0f0;

  ${({ active }) =>
    active
      ? `
    background-color: lightblue;
  `
      : `&:hover {
    opacity: 0.8;
  }`};
`;
