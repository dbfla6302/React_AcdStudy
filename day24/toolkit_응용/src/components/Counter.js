import './Counter.css';
import { useSelector ,useDispatch} from 'react-redux'
import { decrement, increment } from '../store/modules/counter';
const Counter = () => {
	const number  = useSelector( state => state.counter.number)
	const {color}  = useSelector( state => state.counter)
	const dispatch  = useDispatch()

	return (
		<div className="Counter">
				<h1 style={{color:color}}> 숫자: {number} </h1>
				<div className="btn-wrapper">
					<button  onClick={ () => dispatch( increment() )}>+</button>
					<button onClick={ () => dispatch( decrement() )}>-</button>
				</div>			 
		</div>
	);
};

export default Counter;
 