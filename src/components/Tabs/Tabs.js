import React, { useState } from 'react';
import { Button } from '..';
import { TabsStyle } from './TabsStyle';

const Tabs = ({ options }) => {
  const [isActive, setIsActive] = useState(null);
  const handleSelect = (name) => {
    console.log(name);
    setIsActive(name);
  };

  const _options = options.map((item) => {
    let name = item.name;
    return (
      <Button
        onClick={() => handleSelect(name)}
        active={name == isActive}
        key={name}>
        {name}
      </Button>
    );
  });

  return <TabsStyle>{_options}</TabsStyle>;
};

export default Tabs;
