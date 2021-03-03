import React, { useState } from 'react';
import { Button } from '..';
import { TabsStyle, ToggleTabStyle, ToggleStyle } from './TabsStyle';

const Tabs = ({ options, defaultOption, onSelect, toggle }) => {
  const [isActive, setIsActive] = useState(defaultOption.name || null);
  const handleSelect = (name, price, code) => {
    setIsActive(name);
    onSelect({ name, price, code });
  };

  const _defaultOptions = options.map((item) => {
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

  const _toggleOptions = options.map((item) => {
    let name = item.name;
    let price = item.price;
    return (
      <ToggleStyle
        active={name === isActive}
        onClick={() => handleSelect(name, price)}
        key={name}>
        {name}
      </ToggleStyle>
    );
  });

  return !toggle ? (
    <TabsStyle>{_defaultOptions}</TabsStyle>
  ) : (
    <ToggleTabStyle>{_toggleOptions}</ToggleTabStyle>
  );
};

export default Tabs;
