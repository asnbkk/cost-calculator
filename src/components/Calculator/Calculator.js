import React, { useContext, useEffect } from 'react';
import { Tabs } from '..';
import { CalculatorStyle } from './CalculatorStyle';
import { AppType } from '../../temp/TabOptions';
import { GlobalContext } from '../../context/GlobalState';

const Calculator = () => {
  const { type } = useContext(GlobalContext);
  useEffect(() => {
    console.log(type);
  });
  return (
    <CalculatorStyle>
      <h3>What are you working on?({type})</h3>
      <Tabs options={AppType} defaultOption={type} />
    </CalculatorStyle>
  );
};

export default Calculator;
