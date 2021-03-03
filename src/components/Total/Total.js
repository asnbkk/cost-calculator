import React, { useContext, useEffect, useState } from 'react';
import { TotalStyle } from './TotalStyle';
import { GlobalContext } from '../../context/GlobalState';

const Total = () => {
  const common = useContext(GlobalContext);
  let _type = common.type;
  let amount = common[_type.code].map((item) => {
    return item.price;
  });
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return <TotalStyle>Total: {total}</TotalStyle>;
};

export default Total;
