import { useSelector } from 'react-redux';
import './ColorList.css';
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