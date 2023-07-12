import React from 'react';
import Tabs from './Tabs';

const App = () => {
  const tabs = [
          {title: 'Tab 1'},
           {title: 'Tab 2'},
          {title: 'Tab 3'},
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
