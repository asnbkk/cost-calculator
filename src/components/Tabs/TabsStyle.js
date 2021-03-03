import styled from 'styled-components';

export const TabsStyle = styled.div`
  display: flex;
  grid-gap: 1rem;
`;

export const ToggleTabStyle = styled.div`
  display: flex;
`;

export const ToggleStyle = styled.div`
  height: 40px;
  display: grid;
  align-items: center;
  background-color: #f0f0f0;
  padding: 0 2rem;
  cursor: pointer;

  ${({ active }) =>
    active
      ? `
    background-color: lightblue;
  `
      : `&:hover {
    opacity: 0.8;
  }`};
`;
