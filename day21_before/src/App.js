import logo from './logo.svg';
import './App.css';
import Color from './components/color/Color';
import ColorProvider from './contexts/ColorContext';
import CountProvider from './contexts/CountContext';
import Count from './components/count/Count';
import ChangeColor from './components/color/ChangeColor';
import ChangeColorProvider from './contexts/ChangeColorContext';
import CounterProvider from './contexts/CounterContext';
import Counter from './components/count/Counter';
import TodosProvider from './contexts/TodosContext';
import Todos from './components/todos/Todos';

function App() {
  return (
    <div>
      <TodosProvider>
        <Todos />
      </TodosProvider>
      <hr/>

      <ColorProvider>
        {/* 디자인 */}
        <Color />
      </ColorProvider>
      <hr/>

      <ChangeColorProvider>
        <ChangeColor />
      </ChangeColorProvider>
      <hr/>

      <CountProvider>
        <Count />
      </CountProvider>
      <hr/>
      
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default App;
