import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Count from './components/count/Count';

const App = () => {
  return (
    <div>
      <Color />
      <hr/>
      <Count />
      <hr/>
      <ChangeColor />
    </div>
  );
};

export default App;