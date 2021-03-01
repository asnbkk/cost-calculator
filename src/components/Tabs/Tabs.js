import React, { useState } from 'react';
import { Button } from '..';
import { TabsStyle } from './TabsStyle';

const Tabs = ({ options, defaultOption, onSelect }) => {
  const [isActive, setIsActive] = useState(defaultOption.name || null);
  const handleSelect = (name, price) => {
    setIsActive(name);
    onSelect({ name, price });
  };

  const _options = options.map((item) => {
    let name = item.name;
    let price = item.price;
    return (
      <Button
        onClick={() => handleSelect(name, price)}
        active={name === isActive}
        key={name}>
        {name}
      </Button>
    );
  });

  return <TabsStyle>{_options}</TabsStyle>;
};

export default Tabs;
