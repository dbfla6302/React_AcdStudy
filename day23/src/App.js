import React from 'react';
import ChangeColor from './components/color/ChangeColor';
import Color from './components/color/Color';
import Counter from './components/count/Counter';
import Todos from './components/todos/Todos';

const App = () => {
  return (
    <div>
      <Color />
      <hr/>
      <Counter />
      <hr/>
      <ChangeColor />
      <hr />
      <Todos />
    </div>
  );
};

export default App;