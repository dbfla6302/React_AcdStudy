import { useDispatch} from 'react-redux'
import { changeColor } from '../store/modules/counter';
const ColorSquareItem = ({color}) => {
	const dispatch = useDispatch()
	const css = { backgroundColor: color }

	return (
		<div className="Color" style={css} 
		onClick={() => dispatch( changeColor(color))}>
			{color}
		</div>	
	);
};

export default ColorSquareItem;