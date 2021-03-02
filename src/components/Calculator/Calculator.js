import React, { useContext } from 'react';
import { Tabs, Total } from '..';
import { CalculatorStyle } from './CalculatorStyle';
import { AppType, DesignType, Languages } from '../../temp/TabOptions';
import { GlobalContext } from '../../context/GlobalState';

const Calculator = () => {
  const {
    type,
    selectType,
    setDesignType,
    ECW,
    setLanguageAmount,
  } = useContext(GlobalContext);

  console.log(ECW);

  const businessWebsite = () => {
    return (
      <>
        <h3>What is the purpose of the website?</h3>
      </>
    );
  };

  const ecommerceWebsite = () => {
    let designType = ECW.find((o) => o.type === 'designType');
    let languageAmount = ECW.find((o) => o.type === 'languageAmount');
    return (
      <>
        <h3>Custom design or template?</h3>
        <Tabs
          options={DesignType}
          defaultOption={designType}
          onSelect={(designType) => {
            setDesignType(designType.name, designType.price);
          }}
        />
        <h3>How many languages will your store have?</h3>
        <Tabs
          options={Languages}
          defaultOption={languageAmount}
          onSelect={(languageAmount) => {
            setLanguageAmount(languageAmount.name, languageAmount.price);
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
