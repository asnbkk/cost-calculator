import React from 'react';
import { ButtonStyle } from './ButtonStyle';

const Button = ({ children, active, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} active={active}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
