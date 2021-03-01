import React, { useContext } from 'react';
import { Tabs } from '..';
import { CalculatorStyle } from './CalculatorStyle';
import { AppType, DesignType } from '../../temp/TabOptions';
import { GlobalContext } from '../../context/GlobalState';

const Calculator = () => {
  const { type, selectType, designType, setDesignType } = useContext(
    GlobalContext
  );

  const businessWebsite = () => {
    return (
      <>
        <h3>What is the purpose of the website?</h3>
      </>
    );
  };

  const ecommerceWebsite = () => {
    return (
      <>
        <h3>Custom design or template?</h3>
        <Tabs
          options={DesignType}
          defaultOption={designType}
          onSelect={(designType) => {
            setDesignType(designType);
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
        onSelect={(name) => selectType(name)}
      />
      {type === 'Business website' && businessWebsite()}
      {type === 'E-commerce website' && ecommerceWebsite()}
      <hr />
      <h3>
        {type}, {designType}
      </h3>
    </CalculatorStyle>
  );
};

export default Calculator;
