 
import './ColorList.css'; 
import { useSelector ,useDispatch} from 'react-redux'
import ColorListItem from './ColorListItem';

const ColorList = () => {
	const { list } = useSelector( state => state.colorList )
	return (
		<ul className="color-box">
			   {
            list.map ( item => <ColorListItem 
						key = { item.id } item ={ item } />)
              }
		</ul>
	);
};

export default ColorList;