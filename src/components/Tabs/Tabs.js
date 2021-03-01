import React, { useState } from 'react';
import { Button } from '..';
import { TabsStyle } from './TabsStyle';

const Tabs = ({ options, defaultOption, onSelect }) => {
  const [isActive, setIsActive] = useState(defaultOption || null);
  const handleSelect = (name) => {
    setIsActive(name);
    onSelect(name);
  };

  const _options = options.map((item) => {
    let name = item.name;
    return (
      <Button
        onClick={() => handleSelect(name)}
        active={name === isActive}
        key={name}>
        {name}
      </Button>
    );
  });

  return <TabsStyle>{_options}</TabsStyle>;
};

export default Tabs;
