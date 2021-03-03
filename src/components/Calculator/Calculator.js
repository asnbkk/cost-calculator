import React, { useContext } from 'react';
import { Tabs, Total } from '..';
import { CalculatorStyle } from './CalculatorStyle';
import {
  AppType,
  DesignType,
  Languages,
  StockUnits,
  Registration,
} from '../../temp/TabOptions';
import { GlobalContext } from '../../context/GlobalState';

const Calculator = () => {
  const { type, ECW, selectType, setState } = useContext(GlobalContext);

  const businessWebsite = () => {
    return (
      <>
        <h3>What is the purpose of the website?</h3>
      </>
    );
  };

  const ecommerceWebsite = () => {
    let designType = ECW.find((o) => o.type === 'DESIGN');
    let languageAmount = ECW.find((o) => o.type === 'LANGUAGE_AMOUNT');
    let stockUnits = ECW.find((o) => o.type === 'STOCK_UNITS_AMOUNT');
    let registration = ECW.find((o) => o.type === 'REGISTRATION');
    return (
      <>
        <h3>Custom design or template?</h3>
        <Tabs
          options={DesignType}
          defaultOption={designType}
          onSelect={(designType) => {
            setState(designType.name, designType.price, 'DESIGN');
          }}
        />
        <h3>How many languages will your store have?</h3>
        <Tabs
          options={Languages}
          defaultOption={languageAmount}
          onSelect={(languageAmount) => {
            setState(
              languageAmount.name,
              languageAmount.price,
              'LANGUAGE_AMOUNT'
            );
          }}
        />
        <h3>How many stock units do you plan to sell?</h3>
        <Tabs
          options={StockUnits}
          defaultOption={stockUnits}
          onSelect={(stockUnits) => {
            setState(stockUnits.name, stockUnits.price, 'STOCK_UNITS_AMOUNT');
          }}
        />
        <h3>Do you need user registration?</h3>
        <Tabs
          toggle
          options={Registration}
          defaultOption={registration}
          onSelect={(registration) => {
            setState(registration.name, registration.price, 'REGISTRATION');
          }}
        />
      </>
    );
  };

  return (
    <CalculatorStyle>
      <h3>What are you working on?</h3>
      <Tabs
        options={AppType}
        defaultOption={type}
        onSelect={(type) => selectType(type.name, type.price, type.code)}
      />
      {type.name === 'Business website' && businessWebsite()}
      {type.name === 'E-commerce website' && ecommerceWebsite()}
      <Total />
    </CalculatorStyle>
  );
};

export default Calculator;
