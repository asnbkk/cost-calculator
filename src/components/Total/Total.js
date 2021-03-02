import React, { useContext, useEffect } from 'react';
import { TotalStyle } from './TotalStyle';
import { GlobalContext } from '../../context/GlobalState';

const Total = () => {
  const { type } = useContext(GlobalContext);
  return <TotalStyle>{type.code}</TotalStyle>;
};

export default Total;
