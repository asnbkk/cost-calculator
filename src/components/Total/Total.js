import React, { useContext, useEffect, useState } from 'react';
import { TotalStyle } from './TotalStyle';
import { GlobalContext } from '../../context/GlobalState';

const Total = () => {
  const common = useContext(GlobalContext);
  let _type = common.type;
  let amount = common[_type.code].map((item) => {
    return item.price;
  });
  return <TotalStyle>{amount}</TotalStyle>;
};

export default Total;
