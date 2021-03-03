import React, { useState } from 'react';
import { Button } from '..';
import { TabsStyle, ToggleTabStyle } from './TabsStyle';

const Tabs = ({ options, defaultOption, onSelect, toggle }) => {
  const [isActive, setIsActive] = useState(defaultOption.name || null);
  const handleSelect = (name, price, code) => {
    setIsActive(name);
    onSelect({ name, price, code });
  };

  const _options = options.map((item) => {
    let name = item.name;
    let price = item.price;
    let code = item.code;
    return (
      <Button
        onClick={() => handleSelect(name, price, code)}
        active={name === isActive}
        key={name}>
        {name}
      </Button>
    );
  });

  return !toggle ? (
    <TabsStyle>{_options}</TabsStyle>
  ) : (
    <ToggleTabStyle>toggle</ToggleTabStyle>
  );
};

export default Tabs;
