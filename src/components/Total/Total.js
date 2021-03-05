import React, { useContext } from 'react';
import { TotalStyle } from './TotalStyle';
import { GlobalContext } from '../../context/GlobalState';

const Total = () => {
  const common = useContext(GlobalContext);
  let _type = common.type;
  let amount = common[_type.code].map((item) => {
    return item.price;
  });
  const total = amount.reduce((acc, item) => (acc += item), +_type.price);
  // temp
  const _amount = common[_type.code].map((item) => {
    return (
      <p>
        {item.name} - {item.price}
      </p>
    );
  });
  return (
    <TotalStyle>
      Total: {total}
      <hr />
      {_amount}
      {_type.name} - {_type.price}
    </TotalStyle>
  );
};

export default Total;
