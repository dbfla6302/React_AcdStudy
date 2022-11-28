import React  from 'react';
import {  useSelector  } from 'react-redux';
import './ColorSquare.css'; 
import ColorSquareItem from './ColorSquareItem';

 
const ColorSquare = () => {
	const {  colors } = useSelector(state => state.counter )

	return (
		<div className="ColorSquare">
				 {colors.map(color =>  <ColorSquareItem key={color} color={color} />) }
		</div>
	);
};

export default ColorSquare;

