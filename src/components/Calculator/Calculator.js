import React, { useContext } from 'react';
import { Tabs, Total } from '..';
import { CalculatorStyle } from './CalculatorStyle';
import {
  AppType,
  DesignType,
  Languages,
  StockUnits,
  Registration,
  Payments,
  Purpose,
  Branding,
} from '../../temp/TabOptions';
import { GlobalContext } from '../../context/GlobalState';

const Calculator = () => {
  const { type, ECW, BW, selectType, setState } = useContext(GlobalContext);

  const businessWebsite = () => {
    let purpose = BW.find((o) => o.type === 'BW_PURPOSE');
    let designType = BW.find((o) => o.type === 'BW_DESIGN');
    let branding = BW.find((o) => o.type === 'BW_BRANDING');
    return (
      <>
        <h3>What is the purpose of the website?</h3>
        <Tabs
          options={Purpose}
          defaultOption={purpose}
          onSelect={(purpose) => {
            setState(
              purpose.name,
              purpose.description,
              purpose.price,
              'BW_PURPOSE'
            );
          }}
        />
        <h3>Custom design or a template?</h3>
        <Tabs
          options={DesignType}
          defaultOption={designType}
          onSelect={(designType) => {
            setState(
              designType.name,
              designType.description,
              designType.price,
              'BW_DESIGN'
            );
          }}
        />
        <h3>Do you need help with branding?</h3>
        <Tabs
          toggle
          options={Branding}
          defaultOption={branding}
          onSelect={(branding) => {
            setState(
              branding.name,
              branding.description,
              branding.price,
              'BW_BRANDING'
            );
          }}
        />
      </>
    );
  };

  const ecommerceWebsite = () => {
    let designType = ECW.find((o) => o.type === 'ECW_DESIGN');
    let languageAmount = ECW.find((o) => o.type === 'ECW_LANGUAGE_AMOUNT');
    let stockUnits = ECW.find((o) => o.type === 'ECW_STOCK_UNITS_AMOUNT');
    let registration = ECW.find((o) => o.type === 'ECW_REGISTRATION');
    let payments = ECW.find((o) => o.type === 'ECW_PAYMENTS');
    return (
      <>
        <h3>Custom design or template?</h3>
        <Tabs
          options={DesignType}
          defaultOption={designType}
          onSelect={(designType) => {
            setState(
              designType.name,
              designType.description,
              designType.price,
              'ECW_DESIGN'
            );
          }}
        />
        <h3>How many languages will your store have?</h3>
        <Tabs
          options={Languages}
          defaultOption={languageAmount}
          onSelect={(languageAmount) => {
            setState(
              languageAmount.name,
              languageAmount.description,
              languageAmount.price,
              'ECW_LANGUAGE_AMOUNT'
            );
          }}
        />
        <h3>How many stock units do you plan to sell?</h3>
        <Tabs
          options={StockUnits}
          defaultOption={stockUnits}
          onSelect={(stockUnits) => {
            setState(
              stockUnits.name,
              stockUnits.description,
              stockUnits.price,
              'ECW_STOCK_UNITS_AMOUNT'
            );
          }}
        />
        <h3>Do you need user registration?</h3>
        <Tabs
          toggle
          options={Registration}
          defaultOption={registration}
          onSelect={(registration) => {
            setState(
              registration.name,
              registration.description,
              registration.price,
              'ECW_REGISTRATION'
            );
          }}
        />
        <h3>Will you be accepting payments?</h3>
        <Tabs
          toggle
          options={Payments}
          defaultOption={payments}
          onSelect={(payments) => {
            setState(
              payments.name,
              payments.description,
              payments.price,
              'ECW_PAYMENTS'
            );
          }}
        />
      </>
    );
  };

  const mobileApp = () => {
    return true;
  };

  return (
    <CalculatorStyle>
      <h3>What are you working on?</h3>
      <Tabs
        options={AppType}
        defaultOption={type}
        onSelect={(type) =>
          selectType(type.name, type.description, type.price, type.code)
        }
      />
      {type.name === 'Business website' && businessWebsite()}
      {type.name === 'E-commerce website' && ecommerceWebsite()}
      {type.name === 'Mobile App' && mobileApp()}
      <Total />
    </CalculatorStyle>
  );
};

export default Calculator;
