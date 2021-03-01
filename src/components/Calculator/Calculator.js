import React from 'react';
import { Button, Tabs } from '..';
import { CalculatorStyle } from './CalculatorStyle';
import { AppType } from '../../temp/TabOptions';
import { GlobalProvider } from '../../context/GlobalState';

const Calculator = () => {
  return (
    <CalculatorStyle>
      <GlobalProvider>
        <h3>What are you working on?</h3>
        <Tabs options={AppType} />
      </GlobalProvider>
    </CalculatorStyle>
  );
};

export default Calculator;
