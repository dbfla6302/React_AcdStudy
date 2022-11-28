import { useDispatch, useSelector } from 'react-redux';
import { increse, decrese } from '../store/modules/counter';
import './Counter.css';

const Counter = () => {
	const {number, color } = useSelector(state => state.counter )
	const dispatch = useDispatch()

	return (
		<div className="Counter">
				<h1 style={{color:color}}> 숫자: { number}  </h1>
				<div className="btn-wrapper">
					<button onClick={ () => dispatch( increse() )} >+</button>
					<button onClick={ () => dispatch( decrese() )}>-</button>
				</div>
				<em> 1. 숫자 증가 감소 </em><br/>
				<em> 2.아래컬러박스 만들고 누르면 숫자색변경</em>
		</div>
	);
};

export default Counter;
 