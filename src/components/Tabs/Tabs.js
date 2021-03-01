import React, { useContext, useState } from 'react';
import { Button } from '..';
import { GlobalContext } from '../../context/GlobalState';
import { TabsStyle } from './TabsStyle';

const Tabs = ({ options, defaultOption }) => {
  const [isActive, setIsActive] = useState(defaultOption || null);
  const { selectType } = useContext(GlobalContext);
  const handleSelect = (name) => {
    setIsActive(name);
    selectType(name);
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
