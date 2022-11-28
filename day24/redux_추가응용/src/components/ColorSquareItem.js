import { useDispatch  } from 'react-redux';
import { changeColor  } from '../store/modules/counter';

const ColorSquareItem = ({ color }) => {
    const dispatch = useDispatch()
	const style = { backgroundColor: color }
	return (
		<div className="Color"	style={style} onClick={() => dispatch( changeColor(color))}>
			
		</div>	
	);
};

export default ColorSquareItem;