import { useDispatch, useSelector } from 'react-redux';
import { changeInput, insert } from '../store/modules/todos';

const TodoInput = () => {
    const dispatch  = useDispatch()
    const { input } = useSelector(state => state.todos )

    const onSubmit = (e)  => {
		e.preventDefault() 
		
		dispatch(insert( input ))
		dispatch(changeInput( input ))
		dispatch(changeInput( '' ))		
	}

    return (
        <form onSubmit={ onSubmit } >
        <input type="text" placeholder="이름을 입력하세요"
        value={ input } 
        onChange = { (e) => dispatch( changeInput(e.target.value) )}
        />
    </form>
    );
};

export default TodoInput;