import React, { useContext } from 'react';
import { TotalStyle, CostItem } from './TotalStyle';
import { GlobalContext } from '../../context/GlobalState';

const Total = () => {
  const common = useContext(GlobalContext);
  let _type = common.type;
  let amount = common[_type.code].map((item) => {
    return item.price;
  });
  const total = amount.reduce((acc, item) => (acc += item), +_type.price);
  // temp
  const _amount = common[_type.code].map((item, index) => {
    return (
      <CostItem key={index}>
        <div>{item.name}</div>
        {item.price}
      </CostItem>
    );
  });
  return (
    <TotalStyle>
      <CostItem>
        <div>{_type.name}</div>
        {_type.price}
      </CostItem>
      {_amount}
      <h1>Total: {total}</h1>
    </TotalStyle>
  );
};

export default Total;
