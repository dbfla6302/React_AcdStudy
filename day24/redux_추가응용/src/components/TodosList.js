import './TodosList.css'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
 
const TodosList = () => { 
    const {  list } = useSelector(state => state.todos )
    return (
        <ul>
                       
            {
                list.map( item => <TodoItem  key={item.id} item={item} /> )
            }
        </ul>
    );
};

export default TodosList;