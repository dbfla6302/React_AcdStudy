import './App.css';
import Counter from './components/Counter';
import ColorSquare from './components/ColorSquare';
import Todos from './components/Todos';
import ColorOutput from './components/ColorOutput';
 
const App = () => {
	return (
		<div className="App">
			 	<Counter />
				<ColorSquare />
				<ColorOutput />
				<Todos/>
			</div>
	);
};

export default App;