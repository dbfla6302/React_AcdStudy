import { useDispatch } from 'react-redux';
import {  remove, update } from '../store/modules/colorList';


const ColorListItem = ({item}) => {
    const { color, id ,opacity } = item 
    const dispatch  = useDispatch()
    return (
        <li style={{backgroundColor:color, opacity:opacity }}
        onClick ={ () => dispatch( update( id ) )}
		onContextMenu  = {(e) => { e.preventDefault(); dispatch( remove( id ) ) }}	
        >
           { color }
        </li>
    );
};

export default ColorListItem;