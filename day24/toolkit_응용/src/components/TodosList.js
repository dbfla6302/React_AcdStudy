import './TodosList.css'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
 
const TodosList = () => { 
    const {  todos } = useSelector(state => state.todos )
    return (
        <ul>
                       
            {
                todos.map( item => <TodoItem  key={item.id} item={item} /> )
            }
        </ul>
    );
};

export default TodosList;