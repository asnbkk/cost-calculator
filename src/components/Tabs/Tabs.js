import React, { useState } from 'react';
import { Button } from '..';
import { TabsStyle, ToggleTabStyle, ToggleStyle } from './TabsStyle';

const Tabs = ({ options, defaultOption, onSelect, toggle }) => {
  const [isActive, setIsActive] = useState(defaultOption.name || null);
  const handleSelect = (name, description, price, code) => {
    setIsActive(name);
    onSelect({ name, description, price, code });
  };

  const _defaultOptions = options.map((item) => {
    let name = item.name;
    let price = item.price;
    let code = item.code;
    let description = item.description;
    return (
      <Button
        onClick={() => handleSelect(name, description, price, code)}
        active={name === isActive}
        key={name}>
        {name}
      </Button>
    );
  });

  const _toggleOptions = options.map((item) => {
    let name = item.name;
    let price = item.price;
    let description = item.description;
    return (
      <ToggleStyle
        active={name === isActive}
        onClick={() => handleSelect(name, description, price)}
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
