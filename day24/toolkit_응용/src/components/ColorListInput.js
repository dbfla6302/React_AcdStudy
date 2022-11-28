import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert  } from '../store/modules/colorList';


const ColorListInput = () => {
    const {input   } = useSelector( state => state.colorList )
	const dispatch  = useDispatch()
    const onSubmit = (e)  => {
		e.preventDefault() 
		if( !input) return 
		dispatch(insert( input ))
		dispatch(changeInput( input ))
		dispatch(changeInput( '' ))		
	}
    return (
        <form className="ColorList"  onSubmit={onSubmit} >
        <input
           placeholder="원하는 색을 입력하세요"
           value={ input }
           onChange = { (e) => dispatch( changeInput(e.target.value) )}
        />
</form>
    );
};

export default ColorListInput;